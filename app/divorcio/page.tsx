import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Advogado de Divórcio em Joinville | Yares Advocacia",
  description:
    "Advogado especialista em divórcio consensual e litigioso em Joinville/SC. Atendimento rápido, humanizado e estratégico.",
  keywords: [
    "advogado divórcio joinville",
    "divórcio consensual",
    "divórcio litigioso",
    "advogado família joinville",
    "separação judicial",
    "partilha de bens",
    "guarda dos filhos",
    "pensão alimentícia",
  ],
  openGraph: {
    title:
      "Advogado de Divórcio em Joinville | Yares Advocacia",
    description:
      "Atendimento jurídico especializado em divórcio, guarda, pensão e partilha de bens.",
    url: "https://yaresadvocacia.com.br/divorcio",
    siteName: "Yares Advocacia",
    locale: "pt_BR",
    type: "website",
  },
};

export default function DivorcioPage() {
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
              Advogado de
              <span className="block text-[#D4B06A]">
                Divórcio em Joinville
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 text-xl leading-relaxed">
              Assessoria jurídica especializada em divórcio
              consensual e litigioso, partilha de bens,
              guarda dos filhos e pensão alimentícia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              
              <a
                href="https://wa.me/5547996954708"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#D4B06A] hover:brightness-110 transition-all duration-300 px-8 py-4 text-lg font-bold text-black shadow-2xl"
              >
                Solicitar Atendimento
              </a>

              <a
                href="/"
                className="rounded-2xl border border-zinc-700 hover:border-[#D4B06A] transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                Voltar ao Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="/Sidinei.png"
              alt="Dr. Sidinei Yares Silva"
              className="rounded-[40px] border border-[#D4B06A]/20 shadow-2xl"
            />
          </div>

          <div>
            <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
              Atendimento Jurídico
            </span>

            <h2 className="mt-4 text-4xl font-black">
              Soluções jurídicas para divórcio e família
            </h2>

            <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
              O divórcio é um momento delicado que exige
              orientação jurídica segura, estratégica e
              humanizada.
            </p>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              O escritório Yares Advocacia atua em processos
              de divórcio consensual e litigioso, auxiliando
              clientes em questões relacionadas à guarda
              dos filhos, regulamentação de visitas,
              pensão alimentícia e partilha de bens.
            </p>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Atendimento presencial e online para clientes
              em Joinville, Santa Catarina e demais regiões.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="bg-zinc-900/40 border-y border-zinc-800">
        
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-black">
              Como podemos ajudar
            </h2>

            <p className="mt-6 text-zinc-400 text-lg">
              Atendimento completo em direito de família.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Divórcio Consensual",
                desc: "Separação amigável com rapidez e segurança jurídica.",
              },
              {
                title: "Divórcio Litigioso",
                desc: "Atuação estratégica em conflitos familiares.",
              },
              {
                title: "Guarda dos Filhos",
                desc: "Definição de guarda e regulamentação de visitas.",
              },
              {
                title: "Partilha de Bens",
                desc: "Proteção patrimonial e divisão legal de bens.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-black/40 p-8 hover:border-[#D4B06A] hover:-translate-y-2 transition-all duration-500"
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
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
            Perguntas Frequentes
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Dúvidas sobre divórcio
          </h2>
        </div>

        <div className="space-y-6">

          {[
            {
              question:
                "Quanto tempo demora um divórcio?",
              answer:
                "O prazo varia conforme o tipo de divórcio. O consensual costuma ser mais rápido, enquanto o litigioso depende da complexidade do caso.",
            },
            {
              question:
                "É possível fazer divórcio online?",
              answer:
                "Sim. Em muitos casos o atendimento e os procedimentos podem ser realizados digitalmente.",
            },
            {
              question:
                "Como funciona a guarda dos filhos?",
              answer:
                "A guarda pode ser compartilhada ou unilateral, sempre observando o melhor interesse da criança.",
            },
            {
              question:
                "Preciso comparecer em audiência?",
              answer:
                "Depende do processo. Em algumas situações o procedimento pode ocorrer de forma consensual.",
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
            Precisa de orientação jurídica?
          </h2>

          <p className="mt-6 text-lg text-black/80 max-w-3xl mx-auto">
            Entre em contato agora mesmo e receba um atendimento
            jurídico estratégico, rápido e humanizado.
          </p>

          <a
            href="https://wa.me/5547996954708"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 rounded-2xl bg-black hover:brightness-110 transition-all duration-300 px-10 py-5 text-lg font-bold text-white shadow-2xl"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* WHATSAPP FIXO */}
      <a
        href="https://wa.me/5547996954708"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-14 h-14 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_20px_rgba(212,176,106,0.5)]"
        />
      </a>
    </main>
  );
}