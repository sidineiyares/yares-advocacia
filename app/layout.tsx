import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yares Advocacia",
  description:
    "Advocacia especializada em direito de família, trabalhista, internacional e execução de alimentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">

        {/* NAVBAR */}
       <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#001A12]/90 shadow-lg shadow-black/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <a
  href="/"
  className="flex items-center gap-4"
>

  <img
    src="/Logo.png"
    alt="Yares Advocacia"
    className="h-16 w-auto object-contain"
  />

</a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

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

            </nav>

         
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="pt-28">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-zinc-800 bg-black/60">

          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

            <div>

              <h3 className="text-3xl font-black text-[#D4B06A]">
                Yares Advocacia
              </h3>

              <p className="mt-6 text-zinc-400 leading-relaxed">
                Assessoria jurídica estratégica em direito de família,
                trabalhista, internacional e execução de alimentos.
              </p>
            </div>

            <div>

              <h4 className="text-xl font-bold mb-6">
                Áreas de atuação
              </h4>

              <ul className="space-y-4 text-zinc-400">

                <li>
                  <a href="/divorcio" className="hover:text-[#D4B06A]">
                    Divórcio
                  </a>
                </li>

                <li>
                  <a href="/pensao-alimenticia" className="hover:text-[#D4B06A]">
                    Pensão Alimentícia
                  </a>
                </li>

                <li>
                  <a href="/execucao-de-alimentos" className="hover:text-[#D4B06A]">
                    Execução de Alimentos
                  </a>
                </li>

                <li>
                  <a href="/advogado-trabalhista" className="hover:text-[#D4B06A]">
                    Direito Trabalhista
                  </a>
                </li>

                <li>
                  <a href="/direito-internacional" className="hover:text-[#D4B06A]">
                    Direito Internacional
                  </a>
                </li>

              </ul>
            </div>

            <div>

              <h4 className="text-xl font-bold mb-6">
                Contato
              </h4>

              <ul className="space-y-4 text-zinc-400">

                <li>
                  📍 Joinville/SC
                </li>

                <li>
                  📞 (47) 99695-4708
                </li>

                <li>
                  ✉️ sidinei67787@oab-sc.org.br
                </li>

              </ul>

              <a
                href="https://wa.me/5547996954708"
                target="_blank"
                className="inline-block mt-8 rounded-xl bg-[#D4B06A] px-6 py-4 text-black font-bold hover:brightness-110 transition"
              >
                Falar no WhatsApp
              </a>
            </div>

          </div>

          <div className="border-t border-zinc-800 py-6 text-center text-zinc-500 text-sm">
            © 2026 Yares Advocacia — Todos os direitos reservados.
          </div>

        </footer>
   {/* BOTÃO FLUTUANTE WHATSAPP */}
<a
  href="https://wa.me/5547996954708"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 cursor-pointer"
>
  <div className="hover:scale-110 transition-all duration-300">
    <img
      src="/whatsapp.png"
      alt="WhatsApp"
      className="w-14 h-14 drop-shadow-[0_0_20px_rgba(212,176,106,0.5)]"
    />
  </div>
</a>

      </body>
    </html>
  );
}