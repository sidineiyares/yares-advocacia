import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Divórcio Consensual: como funciona? | Yares Advocacia",

  description:
    "Entenda como funciona o divórcio consensual, quais documentos são necessários e como realizar o procedimento de forma rápida e segura.",

  keywords: [
    "divórcio consensual",
    "advogado divórcio",
    "direito de família",
    "separação amigável",
    "divórcio extrajudicial",
    "advogado família joinville",
  ],
};

export default function DivorcioConsensualBlogPage() {
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
            Divórcio consensual:
            <span className="block text-[#D4B06A]">
              como funciona?
            </span>
          </h1>

          <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
            Saiba como funciona o divórcio consensual,
            quais são os requisitos legais e como realizar
            o procedimento de forma rápida e segura.
          </p>

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <article className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10 lg:p-14">

          <h2 className="text-3xl font-bold text-[#D4B06A] mb-6">
            O que é divórcio consensual?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O divórcio consensual ocorre quando ambas as partes
            concordam com o encerramento do casamento e também
            com questões relacionadas à partilha de bens,
            guarda dos filhos e pensão alimentícia.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            O divórcio pode ser feito em cartório?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Sim. Quando não existem filhos menores ou incapazes
            e há consenso entre as partes, o divórcio pode ser realizado
            diretamente em cartório por escritura pública.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Quais documentos são necessários?
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Geralmente são necessários documentos pessoais,
            certidão de casamento atualizada,
            documentos dos bens e demais informações
            relacionadas ao casal.
          </p>

          <h2 className="text-3xl font-bold text-[#D4B06A] mt-14 mb-6">
            Atendimento jurídico especializado
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            O escritório Yares Advocacia atua em divórcios consensuais,
            litigiosos, partilha de bens e direito de família,
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