import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800/80 backdrop-blur-md fixed top-0 w-full z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              S
            </div>
            <span className="font-bold text-lg tracking-tight">ScaleMetrics</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#metrics" className="hover:text-white transition-colors">Resultados</a>
            <a href="#pricing" className="hover:text-white transition-colors">Preços</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md shadow-indigo-600/20">
              Começar Grátis
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
        
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" /> Next-Gen Analytics Platform
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          Estatísticas em tempo real para escalar o seu <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">negócio SaaS</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Monitorize conversões, reduza o churn e otimize receitas num dashboard unificado construído para equipas de alta performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#pricing" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-indigo-600/25">
            Testar 14 Dias Grátis
          </a>
          <a href="#features" className="w-full sm:w-auto border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-300 font-semibold px-8 py-3.5 rounded-xl transition-all">
            Ver Live Demo
          </a>
        </div>

        {/* Mockup Preview */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800 px-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-500 ml-2 font-mono">app.scalemetrics.io/dashboard</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-xl text-left">
              <span className="text-xs text-slate-400 font-medium">ARR Recorrente</span>
              <p className="text-2xl font-bold text-white mt-1">€42,850</p>
              <span className="text-xs text-emerald-400 font-semibold mt-2 inline-block">+18.4% este mês</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-xl text-left">
              <span className="text-xs text-slate-400 font-medium">Novos Assinantes</span>
              <p className="text-2xl font-bold text-white mt-1">1,240</p>
              <span className="text-xs text-emerald-400 font-semibold mt-2 inline-block">+12.1% esta semana</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-xl text-left">
              <span className="text-xs text-slate-400 font-medium">Taxa de Churn</span>
              <p className="text-2xl font-bold text-white mt-1">1.2%</p>
              <span className="text-xs text-indigo-400 font-semibold mt-2 inline-block">-0.4% em relação ao alvo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Arquitetura concebida para velocidade</h2>
            <p className="text-slate-400">Tudo o que a sua equipa precisa para analisar métricas sem comprometer o desempenho.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 font-bold text-xl">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Latência Zero</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Processamento de eventos em tempo real com tempos de resposta inferiores a 50ms.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 mb-6 font-bold text-xl">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Segurança E2E</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Encriptação de dados em repouso e em trânsito com total conformidade GDPR.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 mb-6 font-bold text-xl">🔌</div>
              <h3 className="text-xl font-semibold mb-3">Integrações Diretas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Conexão nativa em 1-clique com Stripe, PostgreSQL, Supabase e Segment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Planos simples e transparentes</h2>
            <p className="text-slate-400">Escolha o plano ideal para a fase atual do seu produto.</p>
          </div>
          <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-slate-400 text-sm mb-6">Ideal para projetos em fase inicial e indie hackers.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">€29</span>
                  <span className="text-slate-400 text-sm">/mês</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li>✓ Até 10,000 eventos/mês</li>
                  <li>✓ 3 Dashboards personalizados</li>
                  <li>✓ Suporte por Email</li>
                </ul>
              </div>
              <button className="w-full border border-slate-700 hover:border-slate-600 bg-slate-800 text-white font-semibold py-3 rounded-xl transition-all">
                Começar no Starter
              </button>
            </div>

            <div className="bg-gradient-to-b from-indigo-950/60 to-slate-900/80 border-2 border-indigo-500 p-8 rounded-2xl flex flex-col justify-between relative shadow-2xl shadow-indigo-500/10">
              <span className="absolute -top-3 right-6 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Mais Popular
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2">Pro Scale</h3>
                <p className="text-slate-400 text-sm mb-6">Para startups e agências em crescimento acelerado.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">€89</span>
                  <span className="text-slate-400 text-sm">/mês</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li>✓ Eventos ilimitados</li>
                  <li>✓ Dashboards & Relatórios Ilimitados</li>
                  <li>✓ Suporte Prioritário 24/7</li>
                  <li>✓ Webhooks & API dedicada</li>
                </ul>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/30">
                Iniciar Teste Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-10 text-center text-slate-500 text-sm">
        <p>© 2026 ScaleMetrics Demo. Desenvolvido por Tiago Castro — Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}