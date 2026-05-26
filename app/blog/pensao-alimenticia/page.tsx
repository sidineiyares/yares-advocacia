import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pensão Alimentícia: como funciona? | Yares Advocacia",

  description:
    "Entenda como funciona a pensão alimentícia, quem tem direito, como é calculada e o que acontece em caso de atraso.",

  keywords: [
    "pensão alimentícia",
    "advogado pensão alimentícia",
    "pensão atrasada",
    "execução de alimentos",
    "direito de família",
    "advogado família joinville",
  ],
};

export default function PensaoAlimenticiaBlogPage() {
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
            Pensão alimentícia:
            <span className="block text-[#D4B06A]">
              como funciona?
            </span>
          </h1>

          <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
            Saiba quem possui direito à pensão alimentícia,
            como é realizado o cálculo e quais medidas podem
            ser tomadas em caso de atraso no pagamento.
          </p>

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <article className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10 lg:p-14">

          <h2 className="text-3xl font-bold text-[#D4B06A] mb-6">
            O que é pensão alimentícia?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            A pensão alimentícia é um valor destinado à manutenção
            das necessidades básicas de quem possui direito aos alimentos,
            como filhos menores, ex-cônjuges e outras situações previstas em lei.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Como é feito o cálculo?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O cálculo considera a necessidade de quem recebe
            e a possibilidade financeira de quem paga.
            Não existe percentual fixo obrigatório,
            sendo cada caso analisado individualmente pelo juiz.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            O que acontece em caso de atraso?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O não pagamento da pensão pode gerar execução judicial,
            penhora de bens, bloqueio de valores e até prisão civil
            do devedor em determinadas hipóteses previstas na legislação.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Atendimento jurídico especializado
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O escritório Yares Advocacia atua em ações de alimentos,
            revisão de pensão, execução de alimentos e direito de família,
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