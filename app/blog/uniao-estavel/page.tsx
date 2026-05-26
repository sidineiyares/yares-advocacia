import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "União Estável: direitos e reconhecimento | Yares Advocacia",

  description:
    "Entenda como funciona a união estável, quais são os direitos do casal, partilha de bens e reconhecimento judicial ou em cartório.",

  keywords: [
    "união estável",
    "reconhecimento de união estável",
    "direito de família",
    "partilha de bens",
    "advogado família",
    "advogado união estável joinville",
  ],
};

export default function UniaoEstavelBlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#00261B] via-[#001A12] to-black text-white">

      {/* NAVBAR */}
      {/* NAVBAR RESPONSIVA */}
<header className="fixed top-0 left-0 w-full z-50 bg-[#001A12]/95 border-b border-[#D4B06A]/10 backdrop-blur-xl">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <a href="/" className="flex items-center">
      <img
        src="/Logo.png"
        alt="Yares Advocacia"
        className="h-14 md:h-16 w-auto object-contain"
      />
    </a>

    {/* MENU DESKTOP */}
    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

      <a
        href="/"
        className="hover:text-[#D4B06A] transition"
      >
        Início
      </a>

      <a
        href="/divorcio"
        className="hover:text-[#D4B06A] transition"
      >
        Divórcio
      </a>

      <a
        href="/pensao-alimenticia"
        className="hover:text-[#D4B06A] transition"
      >
        Pensão
      </a>

      <a
        href="/execucao-de-alimentos"
        className="hover:text-[#D4B06A] transition"
      >
        Execução
      </a>

      <a
        href="/advogado-trabalhista"
        className="hover:text-[#D4B06A] transition"
      >
        Trabalhista
      </a>

      <a
        href="/direito-internacional"
        className="hover:text-[#D4B06A] transition"
      >
        Internacional
      </a>

      <a
        href="/blog"
        className="hover:text-[#D4B06A] transition"
      >
        Blog
      </a>

    </nav>

    {/* BOTÃO MENU MOBILE */}
    <details className="lg:hidden relative">

      <summary className="list-none cursor-pointer">

        <div className="flex flex-col gap-1">

          <span className="w-7 h-[2px] bg-[#D4B06A]"></span>
          <span className="w-7 h-[2px] bg-[#D4B06A]"></span>
          <span className="w-7 h-[2px] bg-[#D4B06A]"></span>

        </div>
      </summary>

      {/* MENU MOBILE */}
      <div className="absolute right-0 mt-6 w-64 rounded-2xl border border-[#D4B06A]/10 bg-[#001A12] shadow-2xl p-6 flex flex-col gap-5 text-sm font-medium">

        <a
          href="/"
          className="hover:text-[#D4B06A] transition"
        >
          Início
        </a>

        <a
          href="/divorcio"
          className="hover:text-[#D4B06A] transition"
        >
          Divórcio
        </a>

        <a
          href="/pensao-alimenticia"
          className="hover:text-[#D4B06A] transition"
        >
          Pensão Alimentícia
        </a>

        <a
          href="/execucao-de-alimentos"
          className="hover:text-[#D4B06A] transition"
        >
          Execução de Alimentos
        </a>

        <a
          href="/advogado-trabalhista"
          className="hover:text-[#D4B06A] transition"
        >
          Trabalhista
        </a>

        <a
          href="/direito-internacional"
          className="hover:text-[#D4B06A] transition"
        >
          Internacional
        </a>

        <a
          href="/blog"
          className="hover:text-[#D4B06A] transition"
        >
          Blog
        </a>

      </div>

    </details>

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
            União estável:
            <span className="block text-[#D4B06A]">
              direitos e reconhecimento
            </span>
          </h1>

          <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
            Saiba como funciona a união estável,
            quais direitos o casal possui e como realizar
            o reconhecimento da relação.
          </p>

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <article className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10 lg:p-14">

          <h2 className="text-3xl font-bold text-[#D4B06A] mb-6">
            O que é união estável?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            A união estável é reconhecida quando duas pessoas
            convivem de forma pública, contínua e duradoura,
            com objetivo de constituição familiar.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            É necessário morar junto?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Nem sempre. O reconhecimento da união estável
            depende da análise da relação como um todo,
            incluindo convivência, publicidade da relação
            e intenção de formar família.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Como funciona a partilha de bens?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Em regra, aplica-se o regime da comunhão parcial de bens,
            salvo existência de contrato estabelecendo regime diferente.
            Os bens adquiridos durante a convivência
            podem ser objeto de partilha.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Reconhecimento judicial ou em cartório
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            A união estável pode ser formalizada em cartório
            por escritura pública ou reconhecida judicialmente,
            inclusive após o término da relação.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Atendimento jurídico especializado
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O escritório Yares Advocacia atua em reconhecimento
            e dissolução de união estável, partilha de bens,
            alimentos e direito de família.
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