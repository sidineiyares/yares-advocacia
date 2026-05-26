import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Direito Internacional | Yares Advocacia",

  description:
    "Assessoria jurídica em direito internacional privado, cidadania, documentos internacionais, casamento no exterior e demandas internacionais.",
};

export default function DireitoInternacionalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#00261B] via-[#001A12] to-black text-white">

      {/* NAVBAR */}
     {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 bg-[#001A12]/95 border-b border-[#D4B06A]/10 backdrop-blur-xl">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <a href="/">
      <img
        src="/Logo.png"
        alt="Yares Advocacia"
        className="h-16 w-auto object-contain"
      />
    </a>

    {/* MENU DESKTOP */}
    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

      <a href="/" className="hover:text-[#D4B06A] transition">
        Início
      </a>

      <a href="/divorcio" className="hover:text-[#D4B06A] transition">
        Divórcio
      </a>

      <a href="/pensao-alimenticia" className="hover:text-[#D4B06A] transition">
        Pensão
      </a>

      <a href="/execucao-de-alimentos" className="hover:text-[#D4B06A] transition">
        Execução
      </a>

      <a href="/advogado-trabalhista" className="hover:text-[#D4B06A] transition">
        Trabalhista
      </a>

      <a href="/direito-internacional" className="hover:text-[#D4B06A] transition">
        Internacional
      </a>

      <a href="/blog" className="hover:text-[#D4B06A] transition">
        Blog
      </a>

    </nav>

    {/* MENU MOBILE */}
    <div className="lg:hidden">
      <button className="text-white text-3xl">
        ☰
      </button>
    </div>

  </div>
</header>
      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24">

        <div className="absolute inset-0 opacity-20">

          <div className="absolute w-96 h-96 bg-[#D4B06A] blur-[140px] rounded-full top-0 left-0"></div>

          <div className="absolute w-96 h-96 bg-[#0A3B2A] blur-[140px] rounded-full bottom-0 right-0"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
              Direito Internacional
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">
              Assessoria
              <span className="block text-[#D4B06A]">
                Internacional
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
              Atendimento jurídico especializado para brasileiros no exterior,
              questões internacionais, cidadania, documentos estrangeiros
              e conflitos internacionais.
            </p>

          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10">

            <h2 className="text-3xl font-bold text-[#D4B06A] mb-6">
              Atuação Internacional
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Assessoria jurídica em processos envolvendo casamento no exterior,
              homologação de documentos estrangeiros, cidadania
              e questões internacionais privadas.
            </p>

          </div>

          <div className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10">

            <h2 className="text-3xl font-bold text-[#D4B06A] mb-6">
              Atendimento Estratégico
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Atendimento jurídico moderno e digital para clientes
              no Brasil e no exterior com acompanhamento completo
              e personalizado.
            </p>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-black/60">

        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-zinc-500">

          © 2026 Yares Advocacia — Todos os direitos reservados.

        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5547996954708"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 hover:scale-110 transition-all duration-300"
        />
      </a>

    </main>
  );
}