import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Direito Internacional e Imigração | Yares Advocacia",

  description:
    "Assessoria jurídica em direito internacional, imigração, dupla cidadania, contratos internacionais e regularização documental.",

  keywords: [
    "direito internacional",
    "advogado internacional",
    "imigração",
    "advogado imigração",
    "cidadania portuguesa",
    "regularização documental",
    "advogado brasileiro exterior",
    "contratos internacionais",
    "advogado portugal",
    "advogado internacional joinville",
  ],
};

export default function DireitoInternacionalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#00261B] via-[#001A12] to-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-[#D4B06A] blur-[140px] rounded-full top-0 left-0"></div>

          <div className="absolute w-96 h-96 bg-[#0A3B2A] blur-[140px] rounded-full bottom-0 right-0"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">

          <div className="max-w-4xl">

            <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
              Direito Internacional
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">
              Assessoria Jurídica
              <span className="block text-[#D4B06A]">
                Internacional
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
              Atendimento jurídico estratégico para brasileiros no exterior,
              imigração, cidadania, contratos internacionais
              e regularização documental.
            </p>

            <a
              href="https://wa.me/5547996954708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 rounded-2xl bg-[#D4B06A] hover:brightness-110 transition-all duration-300 px-8 py-5 text-lg font-bold text-black shadow-2xl"
            >
              Solicitar Atendimento
            </a>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-black">
            Áreas de Atuação
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Atendimento jurídico nacional e internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Cidadania Portuguesa",
              desc: "Auxílio jurídico para processos de nacionalidade portuguesa.",
            },

            {
              title: "Imigração",
              desc: "Orientação jurídica para vistos e regularização internacional.",
            },

            {
              title: "Documentação Internacional",
              desc: "Assessoria documental e validação de documentos.",
            },

            {
              title: "Contratos Internacionais",
              desc: "Elaboração e análise de contratos internacionais.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 hover:border-[#D4B06A] hover:-translate-y-2 transition-all duration-500"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#D4B06A]/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-[#D4B06A]"></div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-zinc-900/40 border-y border-zinc-800">

        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">

          <div className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10">

            <h2 className="text-3xl font-bold mb-6 text-[#D4B06A]">
              Atendimento para brasileiros no exterior
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              O escritório presta assessoria jurídica para brasileiros
              residentes fora do Brasil, oferecendo suporte
              em questões documentais, familiares e patrimoniais.
            </p>

            <ul className="mt-8 space-y-4 text-zinc-300 text-lg">
              <li>• Regularização documental;</li>
              <li>• Procurações internacionais;</li>
              <li>• Reconhecimento de documentos;</li>
              <li>• Cidadania portuguesa;</li>
              <li>• Questões familiares internacionais;</li>
              <li>• Contratos internacionais.</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10">

            <h2 className="text-3xl font-bold mb-6 text-[#D4B06A]">
              Assessoria estratégica
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Atendimento humanizado e estratégico para clientes
              no Brasil e exterior, com foco em soluções jurídicas seguras.
            </p>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              O objetivo é proporcionar suporte jurídico completo,
              agilidade documental e segurança nas relações internacionais.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
            Perguntas Frequentes
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Dúvidas comuns
          </h2>
        </div>

        <div className="space-y-6">

          {[
            {
              question:
                "Posso resolver processos no Brasil morando no exterior?",
              answer:
                "Sim. Diversos procedimentos podem ser realizados mediante procuração e atendimento online.",
            },

            {
              question:
                "Vocês auxiliam na cidadania portuguesa?",
              answer:
                "Sim. O escritório oferece assessoria jurídica documental e estratégica.",
            },

            {
              question:
                "É possível assinar contratos internacionais com segurança?",
              answer:
                "Sim. A análise jurídica adequada reduz riscos e garante maior segurança contratual.",
            },

            {
              question:
                "O atendimento pode ser online?",
              answer:
                "Sim. O atendimento pode ser realizado de forma totalmente digital.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border border-zinc-800 bg-black/40 p-8"
            >

              <h3 className="text-2xl font-bold text-[#D4B06A]">
                {item.question}
              </h3>

              <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-[#B68A3D] via-[#D4B06A] to-[#E5C98A] p-14 text-center shadow-2xl">

          <h2 className="text-4xl lg:text-5xl font-black text-black">
            Precisa de assessoria internacional?
          </h2>

          <p className="mt-6 text-lg text-black/80 max-w-3xl mx-auto">
            Entre em contato agora mesmo e receba
            atendimento jurídico especializado.
          </p>

          <a
            href="https://wa.me/5547996954708"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 rounded-2xl bg-black hover:brightness-110 transition-all duration-300 px-10 py-5 text-lg font-bold text-white"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}