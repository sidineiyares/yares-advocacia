import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Advogado Trabalhista em Joinville | Yares Advocacia",

  description:
    "Advogado trabalhista em Joinville/SC. Atuação em rescisão indireta, verbas rescisórias, horas extras, FGTS, demissão sem justa causa e direitos do trabalhador.",

  keywords: [
    "advogado trabalhista joinville",
    "advogado do trabalho",
    "rescisão indireta",
    "verbas rescisórias",
    "horas extras",
    "FGTS",
    "demissão sem justa causa",
    "processo trabalhista",
    "direitos trabalhistas",
  ],
};

export default function AdvogadoTrabalhistaPage() {
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
              Direito Trabalhista
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">
              Advogado
              <span className="block text-[#D4B06A]">
                Trabalhista
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
              Assessoria jurídica especializada em direitos trabalhistas,
              rescisões, horas extras, FGTS, verbas rescisórias
              e ações judiciais trabalhistas.
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
            Atuação em Direito do Trabalho
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Defesa dos direitos do trabalhador com atendimento estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Rescisão Trabalhista",
              desc: "Análise e cobrança de verbas rescisórias.",
            },

            {
              title: "Horas Extras",
              desc: "Cobrança judicial de horas extras não pagas.",
            },

            {
              title: "FGTS e INSS",
              desc: "Regularização e cobrança de direitos trabalhistas.",
            },

            {
              title: "Rescisão Indireta",
              desc: "Encerramento do contrato por falta grave do empregador.",
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
              Direitos do trabalhador
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Todo trabalhador possui direitos garantidos pela
              legislação trabalhista brasileira, incluindo:
            </p>

            <ul className="mt-8 space-y-4 text-zinc-300 text-lg">
              <li>• Registro em carteira;</li>
              <li>• Pagamento de horas extras;</li>
              <li>• FGTS;</li>
              <li>• Férias e 13º salário;</li>
              <li>• Verbas rescisórias;</li>
              <li>• Ambiente de trabalho adequado.</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-[#D4B06A]/10 bg-black/40 p-10">

            <h2 className="text-3xl font-bold mb-6 text-[#D4B06A]">
              Atendimento especializado
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              O escritório atua de forma estratégica em ações
              trabalhistas, buscando a melhor solução jurídica
              para cada caso.
            </p>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Atendimento humanizado, análise detalhada da situação
              do trabalhador e acompanhamento completo do processo.
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
            Dúvidas trabalhistas
          </h2>
        </div>

        <div className="space-y-6">

          {[
            {
              question:
                "Posso processar a empresa após pedir demissão?",
              answer:
                "Sim. Dependendo da situação, é possível buscar direitos não pagos mesmo após o encerramento do contrato.",
            },

            {
              question:
                "O que é rescisão indireta?",
              answer:
                "É quando o trabalhador encerra o contrato por falta grave cometida pelo empregador.",
            },

            {
              question:
                "Horas extras não pagas podem ser cobradas?",
              answer:
                "Sim. O trabalhador pode buscar judicialmente o pagamento das horas extras devidas.",
            },

            {
              question:
                "Quanto tempo tenho para entrar com ação trabalhista?",
              answer:
                "Em regra, o prazo prescricional é de até 2 anos após o fim do contrato de trabalho.",
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
            Precisa de orientação trabalhista?
          </h2>

          <p className="mt-6 text-lg text-black/80 max-w-3xl mx-auto">
            Entre em contato agora mesmo e receba atendimento
            jurídico rápido, estratégico e especializado.
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