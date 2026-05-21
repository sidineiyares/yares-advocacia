export const metadata = {
  title:
    "Execução de Alimentos em Joinville | Yares Advocacia",
    
  description:
    "Advogado especialista em execução de alimentos, cobrança de pensão alimentícia atrasada, prisão civil e cumprimento de sentença em Joinville/SC.",
};

export default function ExecucaoDeAlimentos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
          Direito de Família
        </span>

        <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight max-w-4xl">
          Execução de alimentos em Joinville
        </h1>

        <p className="mt-8 text-zinc-300 text-xl leading-relaxed max-w-3xl">
          Assessoria jurídica especializada para cobrança de pensão
          alimentícia atrasada, execução judicial, prisão civil
          do devedor e cumprimento de sentença.
        </p>

        <a
          href="https://wa.me/5547996954708"
          target="_blank"
          className="inline-block mt-10 rounded-2xl bg-[#D4B06A] hover:brightness-110 transition-all duration-300 px-8 py-5 text-lg font-bold text-black shadow-2xl"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12">

        <div className="rounded-[32px] border border-[#D4B06A]/10 bg-zinc-900 p-10">

          <h2 className="text-3xl font-bold mb-6 text-[#D4B06A]">
            O que é execução de alimentos?
          </h2>

          <p className="text-zinc-300 leading-relaxed text-lg">
            A execução de alimentos é o procedimento judicial utilizado
            para cobrar pensão alimentícia em atraso.
            O devedor poderá sofrer medidas como:
          </p>

          <ul className="mt-8 space-y-4 text-zinc-300 text-lg">
            <li>• Prisão civil;</li>
            <li>• Penhora de bens;</li>
            <li>• Bloqueio de contas bancárias;</li>
            <li>• Desconto em folha de pagamento;</li>
            <li>• Protesto judicial.</li>
          </ul>
        </div>

        <div className="rounded-[32px] border border-[#D4B06A]/10 bg-zinc-900 p-10">

          <h2 className="text-3xl font-bold mb-6 text-[#D4B06A]">
            Atendimento especializado
          </h2>

          <p className="text-zinc-300 leading-relaxed text-lg">
            O escritório Yares Advocacia atua de forma estratégica
            em ações de:
          </p>

          <ul className="mt-8 space-y-4 text-zinc-300 text-lg">
            <li>• Execução de pensão alimentícia;</li>
            <li>• Cobrança de alimentos atrasados;</li>
            <li>• Prisão civil do devedor;</li>
            <li>• Revisão de alimentos;</li>
            <li>• Cumprimento de sentença.</li>
          </ul>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] bg-gradient-to-r from-[#B68A3D] via-[#D4B06A] to-[#E5C98A] p-14 text-black">

          <h2 className="text-4xl font-black">
            Dr. Sidinei Yares Silva
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Advogado inscrito na OAB/SC 67787,
            atuante em Direito de Família,
            com atendimento estratégico e humanizado
            na cidade de Joinville e região.
          </p>
        </div>
      </section>

    </main>
  );
}