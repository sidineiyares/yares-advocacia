import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Execução de Alimentos pode gerar prisão? | Yares Advocacia",

  description:
    "Entenda como funciona a execução de alimentos, cobrança judicial da pensão atrasada e quando pode ocorrer prisão civil.",

  keywords: [
    "execução de alimentos",
    "prisão por pensão",
    "pensão atrasada",
    "advogado pensão alimentícia",
    "execução de pensão",
    "advogado família joinville",
  ],
};

export default function ExecucaoDeAlimentosBlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#00261B] via-[#001A12] to-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#001A12]/95 border-b border-[#D4B06A]/10 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <a href="/">
            <img
              src="/Logo.png"
              alt="Yares Advocacia"
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            <a href="/" className="hover:text-[#D4B06A] transition">
              Início
            </a>

            <a href="/blog" className="hover:text-[#D4B06A] transition">
              Blog
            </a>

          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-20">

        <div className="absolute inset-0 opacity-20">

          <div className="absolute w-96 h-96 bg-[#D4B06A] blur-[140px] rounded-full top-0 left-0"></div>

          <div className="absolute w-96 h-96 bg-[#0A3B2A] blur-[140px] rounded-full bottom-0 right-0"></div>

        </div>

        <div className="relative max-w-5xl mx-auto px-6">

          <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
            Direito de Família
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight">
            Execução de alimentos
            <span className="block text-[#D4B06A]">
              pode gerar prisão?
            </span>
          </h1>

          <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
            Entenda quando o não pagamento da pensão alimentícia
            pode resultar em execução judicial, bloqueio de bens
            e prisão civil do devedor.
          </p>

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <article className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10 lg:p-14">

          <h2 className="text-3xl font-bold text-[#D4B06A] mb-6">
            O que é execução de alimentos?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            A execução de alimentos é o procedimento judicial utilizado
            para cobrar pensão alimentícia não paga pelo devedor.
            O objetivo é garantir o cumprimento da obrigação alimentar.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Quando pode ocorrer prisão civil?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            A prisão civil pode ocorrer quando existem parcelas recentes
            de pensão em atraso, normalmente referentes aos últimos três meses,
            conforme entendimento consolidado pela legislação e jurisprudência.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Outras medidas judiciais
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Além da prisão civil, o juiz poderá determinar penhora de bens,
            bloqueio de contas bancárias, desconto em folha de pagamento
            e inclusão do nome do devedor em órgãos de proteção ao crédito.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Atendimento jurídico especializado
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O escritório Yares Advocacia atua em ações de execução de alimentos,
            revisão de pensão alimentícia e direito de família,
            oferecendo atendimento estratégico e humanizado.
          </p>

        </article>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-[#B68A3D] via-[#D4B06A] to-[#E5C98A] p-14 text-center shadow-2xl">

          <h2 className="text-4xl font-black text-black">
            Precisa de orientação jurídica?
          </h2>

          <p className="mt-6 text-lg text-black/80">
            Entre em contato e receba atendimento jurídico especializado.
          </p>

          <a
            href="https://wa.me/5547996954708"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 rounded-2xl bg-black px-10 py-5 text-lg font-bold text-white hover:brightness-110 transition"
          >
            Falar no WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}