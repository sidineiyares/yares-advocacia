import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pensão Alimentícia em Joinville | Yares Advocacia",
    
  description:
    "Advogado especialista em pensão alimentícia em Joinville/SC. Ações de alimentos, revisão, exoneração e execução de pensão.",

  keywords: [
    "pensão alimentícia",
    "advogado pensão alimentícia joinville",
    "execução de alimentos",
    "revisão de alimentos",
    "cobrança de pensão",
    "prisão civil pensão",
    "direito de família",
  ],
};

export default function PensaoAlimenticiaPage() {
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
              Direito de Família
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">
              Pensão
              <span className="block text-[#D4B06A]">
                Alimentícia
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
              Atuação jurídica especializada em ações de alimentos,
              revisão de pensão, cobrança judicial e execução
              de valores atrasados.
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

      {/* CONTEÚDO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="rounded-[32px] border border-[#D4B06A]/10 bg-zinc-900 p-10">

            <h2 className="text-3xl font-bold mb-6 text-[#D4B06A]">
              O que é pensão alimentícia?
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              A pensão alimentícia é um direito destinado à manutenção
              das necessidades básicas do alimentando, incluindo:
            </p>

            <ul className="mt-8 space-y-4 text-zinc-300 text-lg">
              <li>• Alimentação;</li>
              <li>• Educação;</li>
              <li>• Saúde;</li>
              <li>• Moradia;</li>
              <li>• Vestuário;</li>
              <li>• Lazer e bem-estar.</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-[#D4B06A]/10 bg-zinc-900 p-10">

            <h2 className="text-3xl font-bold mb-6 text-[#D4B06A]">
              Como podemos ajudar
            </h2>

            <ul className="space-y-5 text-zinc-300 text-lg leading-relaxed">

              <li>
                • Ação de fixação de alimentos;
              </li>

              <li>
                • Revisão de pensão alimentícia;
              </li>

              <li>
                • Execução de alimentos atrasados;
              </li>

              <li>
                • Pedido de prisão civil;
              </li>

              <li>
                • Exoneração de alimentos;
              </li>

              <li>
                • Cumprimento de sentença.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-900/40 border-y border-zinc-800">

        <div className="max-w-5xl mx-auto px-6 py-24">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-black">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">

            {[
              {
                question:
                  "Quem pode pedir pensão alimentícia?",
                answer:
                  "Filhos menores, ex-cônjuges e outras pessoas previstas em lei podem solicitar alimentos conforme a necessidade e possibilidade.",
              },

              {
                question:
                  "O que acontece quando a pensão não é paga?",
                answer:
                  "É possível ingressar com execução judicial, pedido de prisão civil, penhora e bloqueio de valores.",
              },

              {
                question:
                  "Posso revisar o valor da pensão?",
                answer:
                  "Sim. Havendo alteração financeira das partes, é possível pedir revisão judicial.",
              },

              {
                question:
                  "Quanto tempo demora o processo?",
                answer:
                  "O prazo depende da complexidade do caso e da tramitação judicial.",
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
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="rounded-[40px] bg-gradient-to-r from-[#B68A3D] via-[#D4B06A] to-[#E5C98A] p-14 text-center shadow-2xl">

          <h2 className="text-4xl lg:text-5xl font-black text-black">
            Precisa de orientação jurídica?
          </h2>

          <p className="mt-6 text-lg text-black/80 max-w-2xl mx-auto">
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