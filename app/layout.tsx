import Script from "next/script";
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
  title: "Dr. Sidinei Yares Silva | Advogado em Joinville SC",

  description:
    "Advogado em Joinville especializado em Direito Administrativo, Direito de Família e Direito Internacional Privado. Atendimento jurídico estratégico, moderno e digital.",

  keywords: [
  "advogado em Joinville",
  "advogado Joinville SC",
  "advogado Santa Catarina",
  "advogado online",
  "advocacia digital",

  "direito de família Joinville",
  "advogado de família",
  "advogado divórcio",
  "divórcio consensual",
  "divórcio litigioso",
  "pensão alimentícia",
  "execução de alimentos",
  "cobrança de pensão alimentícia",
  "guarda compartilhada",
  "guarda unilateral",
  "regulamentação de visitas",
  "alienação parental",

  "direito civil Joinville",
  "advogado civil",
  "indenização por danos morais",
  "ação indenizatória",
  "rescisão contratual",
  "advogado contratos",

  "direito administrativo",
  "advogado administrativo Joinville",
  "servidor público",
  "processo administrativo",
  "concurso público",
  "reclassificação concurso",

  "direito internacional privado",
  "advogado internacional",
  "imigração Portugal",
  "cidadania portuguesa",
  "advogado Portugal",

  "direito trabalhista",
  "advogado trabalhista Joinville",
  "rescisão trabalhista",
  "verbas rescisórias",
  "horas extras",
],

  authors: [{ name: "Dr. Sidinei Yares Silva" }],

  creator: "Dr. Sidinei Yares Silva",

  openGraph: {
    title: "Dr. Sidinei Yares Silva | Advocacia Estratégica",
    
    description:
      "Atendimento jurídico moderno em Joinville e Santa Catarina.",

    url: "https://YARESADVOCACIA.COM.BR",

    siteName: "Yares Advocacia",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yares Advocacia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col">

  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-9K50R1R9PD"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-9K50R1R9PD');
    `}
  </Script>

  {children}
</body>
    </html>
  );
}
