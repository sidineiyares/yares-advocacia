import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Direito Trabalhista: principais direitos do trabalhador | Yares Advocacia",

  description:
    "Entenda os principais direitos trabalhistas, horas extras, FGTS, verbas rescisórias e quando procurar um advogado trabalhista.",

  keywords: [
    "direito trabalhista",
    "advogado trabalhista",
    "horas extras",
    "FGTS",
    "verbas rescisórias",
    "rescisão indireta",
    "advogado trabalhista joinville",
  ],
};

export default function DireitoTrabalhistaBlogPage() {
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
            Direito Trabalhista
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight">
            Principais direitos
            <span className="block text-[#D4B06A]">
              do trabalhador
            </span>
          </h1>

          <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
            Conheça os principais direitos garantidos pela legislação
            trabalhista e saiba quando procurar orientação jurídica especializada.
          </p>

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <article className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10 lg:p-14">

          <h2 className="text-3xl font-bold text-[#D4B06A] mb-6">
            Direitos garantidos pela CLT
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            A Consolidação das Leis do Trabalho (CLT)
            garante diversos direitos ao trabalhador,
            incluindo férias, 13º salário, FGTS,
            horas extras e verbas rescisórias.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Horas extras e adicional noturno
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O trabalhador possui direito ao recebimento
            das horas extras realizadas além da jornada legal,
            bem como adicionais previstos em lei,
            como adicional noturno e insalubridade.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Rescisão indireta
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            A rescisão indireta ocorre quando o empregador
            comete falta grave, permitindo ao trabalhador
            encerrar o contrato com direito às verbas rescisórias.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Quando procurar um advogado trabalhista?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            É importante buscar orientação jurídica sempre que houver
            dúvidas sobre direitos trabalhistas, demissões,
            verbas rescisórias ou irregularidades no ambiente de trabalho.
          </p>

        </article>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-[#B68A3D] via-[#D4B06A] to-[#E5C98A] p-14 text-center shadow-2xl">

          <h2 className="text-4xl font-black text-black">
            Precisa de orientação trabalhista?
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