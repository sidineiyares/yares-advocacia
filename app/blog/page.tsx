import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Jurídico | Yares Advocacia",

  description:
    "Artigos jurídicos sobre direito de família, execução de alimentos, direito trabalhista e internacional.",

  keywords: [
    "blog jurídico",
    "advogado Joinville",
    "direito de família",
    "execução de alimentos",
    "pensão alimentícia",
    "direito internacional",
  ],

  openGraph: {
    title: "Blog Jurídico | Yares Advocacia",

    description:
      "Conteúdo jurídico estratégico e atualizado.",

    images: ["/og-image.png"],
  },
};

export default function BlogPage() {

  const posts = [
    {
      title: "Como funciona a pensão alimentícia?",
      desc:
        "Entenda quem tem direito, como funciona o cálculo e como cobrar judicialmente.",

      link: "/blog/pensao-alimenticia",
    },

    {
      title: "Execução de alimentos pode gerar prisão?",
      desc:
        "Veja quando a dívida alimentar pode resultar em prisão civil.",

      link: "/blog/execucao-de-alimentos",
    },

    {
      title: "Divórcio consensual é mais rápido?",
      desc:
        "Saiba as diferenças entre divórcio consensual e litigioso.",

      link: "/blog/divorcio-consensual",
    },

    {
      title: "Direitos do trabalhador demitido",
      desc:
        "Conheça os principais direitos trabalhistas na demissão sem justa causa.",

      link: "/blog/direito-trabalhista",
    },

    {
      title: "Como funciona o direito internacional privado?",
      desc:
        "Entenda questões jurídicas envolvendo brasileiros no exterior.",

      link: "/blog/direito-internacional",
    },

    {
      title: "União estável dá direito a bens?",
      desc:
        "Descubra quais direitos patrimoniais existem na união estável.",

      link: "/blog/uniao-estavel",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#00261B] via-[#001A12] to-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute top-0 left-0 w-full h-full opacity-20">

          <div className="absolute w-96 h-96 bg-[#D4B06A] blur-[140px] rounded-full top-10 left-10"></div>

          <div className="absolute w-96 h-96 bg-[#0A3B2A] blur-[140px] rounded-full bottom-0 right-0"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
            Blog Jurídico
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">

            Conteúdo jurídico

            <span className="block text-[#D4B06A]">
              estratégico e atualizado
            </span>

          </h1>

          <p className="mt-8 text-zinc-300 text-lg leading-relaxed max-w-3xl mx-auto">

            Artigos jurídicos elaborados para esclarecer dúvidas,
            orientar clientes e trazer informações relevantes sobre
            direito de família, trabalhista, internacional e civil.

          </p>

        </div>
      </section>

      {/* POSTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (

            <div
              key={post.title}
              className="rounded-[32px] border border-[#D4B06A]/10 bg-zinc-900/70 backdrop-blur-sm p-8 hover:border-[#D4B06A] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,176,106,0.18)] transition-all duration-500"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#D4B06A]/20 flex items-center justify-center mb-6">

                <div className="w-6 h-6 rounded-full bg-[#D4B06A]"></div>

              </div>

              <h2 className="text-2xl font-bold leading-snug">
                {post.title}
              </h2>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                {post.desc}
              </p>

              <a
                href={post.link}
                className="inline-block mt-8 text-[#D4B06A] font-semibold hover:translate-x-1 transition-all"
              >
                Ler artigo →
              </a>

            </div>

          ))}
        </div>
      </section>
    </div>
  );
}