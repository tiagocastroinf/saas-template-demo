import csv
import json
import os
import re
import uuid
from datetime import datetime

from flask import Flask, jsonify, request, send_from_directory
from google import genai
from google.genai import types

# ---------------------------------------------------------------
# 1) PERSONALIZA AQUI para cada clínica a quem vais enviar a demo
# ---------------------------------------------------------------
NOME_CLINICA = "Clínica Dentária Sorriso"
HORARIO = "Segunda a sexta, das 9h às 19h. Sábados das 9h às 13h."
MORADA = "Rua Exemplo, 123, Maia"
TELEFONE = "229 000 000"
SERVICOS = """
- Consulta de avaliação: 30 EUR
- Limpeza (destartarização): 55 EUR
- Branqueamento: desde 180 EUR
- Ortodontia: avaliação gratuita, orçamento após consulta
- Urgências: ligar para o telefone da clínica
"""
HORARIOS_LIVRES = """
- Terça: 10h, 11h, 15h
- Quarta: 9h, 14h, 17h
- Quinta: 10h, 16h
- Sexta: 9h, 11h, 15h
"""

INSTRUCOES = f"""
És o assistente virtual da {NOME_CLINICA}. Falas português de Portugal, com tom simpático, profissional e direto.
Escreve em texto simples, sem markdown, sem asteriscos e com respostas curtas (máximo 4 frases).

DADOS DA CLÍNICA (usa apenas estes):
Horário: {HORARIO}
Morada: {MORADA}
Telefone: {TELEFONE}
Serviços e preços:
{SERVICOS}
Horários livres para marcação:
{HORARIOS_LIVRES}

O QUE FAZES:
1. Respondes a perguntas sobre horário, morada, serviços e preços.
2. Ajudas a marcar consulta. Recolhe, um dado de cada vez: nome, telefone, tipo de consulta e horário preferido (escolhido da lista de horários livres).
3. Quando tiveres os quatro dados, faz um resumo e diz que é um pedido de marcação e que a receção vai confirmar em breve por telefone.
4. Depois do resumo, numa nova linha final, escreve exatamente isto (uma só vez, sem blocos de código e sem mais nada a seguir):
PEDIDO_JSON: {{"nome": "...", "telefone": "...", "consulta": "...", "horario": "..."}}
Substitui os "..." pelos dados da pessoa. Nunca escrevas esta linha antes de teres os quatro dados.

REGRAS:
- Nunca dês diagnósticos nem aconselhamento médico. Para dor forte, inchaço ou urgência, pede à pessoa para ligar para o {TELEFONE}.
- Se não souberes algo, diz que a receção responde a essa questão e não inventes.
- Não confirmes a marcação como definitiva: a receção é que confirma.
"""

# ---------------------------------------------------------------

MODELO = "gemini-1.5-flash"
# Lê a chave diretamente do ambiente
api_key = os.environ.get("GEMINI_API_KEY")
client = genai.Client(api_key=api_key) if api_key else genai.Client()

PASTA = os.path.dirname(os.path.abspath(__file__))
FICHEIRO_PEDIDOS = os.path.join(PASTA, "pedidos.csv")
CAMPOS = ["recebido_em", "nome", "telefone", "consulta", "horario"]

app = Flask(__name__, static_folder="static")
conversas = {}  # uma conversa por visitante, em memória
sessoes_com_pedido = set()  # evita guardar o mesmo pedido duas vezes


def guardar_pedido(pedido):
    novo = not os.path.exists(FICHEIRO_PEDIDOS)
    with open(FICHEIRO_PEDIDOS, "a", newline="", encoding="utf-8-sig") as f:
        escritor = csv.DictWriter(f, fieldnames=CAMPOS)
        if novo:
            escritor.writeheader()
        linha = {"recebido_em": datetime.now().strftime("%d/%m/%Y %H:%M")}
        for campo in CAMPOS[1:]:
            linha[campo] = str(pedido.get(campo, "")).strip()[:100]
        escritor.writerow(linha)


def extrair_pedido(texto):
    """Separa a resposta visível do bloco PEDIDO_JSON no fim."""
    m = re.search(r"PEDIDO_JSON:\s*(\{.*\})", texto, re.DOTALL)
    if not m:
        return texto, None
    visivel = texto[: m.start()].strip()
    try:
        return visivel, json.loads(m.group(1))
    except ValueError:
        return visivel, None


@app.get("/")
def home():
    return send_from_directory("static", "index.html")


@app.get("/rececao")
def rececao():
    return send_from_directory("static", "rececao.html")


@app.get("/info")
def info():
    return jsonify(nome=NOME_CLINICA)


@app.get("/pedidos")
def pedidos():
    if not os.path.exists(FICHEIRO_PEDIDOS):
        return jsonify([])
    with open(FICHEIRO_PEDIDOS, newline="", encoding="utf-8-sig") as f:
        linhas = list(csv.DictReader(f))
    return jsonify(linhas[::-1])  # mais recentes primeiro


@app.post("/chat")
def chat():
    dados = request.get_json(silent=True) or {}
    texto = (dados.get("mensagem") or "").strip()[:500]
    sessao = dados.get("sessao") or str(uuid.uuid4())

    if not texto:
        return jsonify(erro="Escreve uma mensagem."), 400

    if sessao not in conversas:
        conversas[sessao] = client.chats.create(
            model=MODELO,
            config=types.GenerateContentConfig(
                system_instruction=INSTRUCOES, temperature=0.4
            ),
        )

    try:
        resposta = conversas[sessao].send_message(texto)
        visivel, pedido = extrair_pedido(resposta.text or "")
        if pedido and sessao not in sessoes_com_pedido:
            guardar_pedido(pedido)
            sessoes_com_pedido.add(sessao)
            print("Novo pedido de marcação:", pedido)
        return jsonify(resposta=visivel, sessao=sessao)
    except Exception as e:
        print("Erro da API:", e)
        return jsonify(erro="Não consegui responder agora. Tenta novamente."), 500


if __name__ == "__main__":
    if not os.environ.get("GEMINI_API_KEY"):
        print("Falta definir a variável GEMINI_API_KEY (ver instruções).")
    app.run(debug=True)
