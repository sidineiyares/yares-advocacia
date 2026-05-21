"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#00261B] via-[#001A12] to-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#0A3B2A_0%,#001A12_45%,#000000_100%)]">

        {/* EFEITOS DE LUZ */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 bg-[#D4B06A] blur-[140px] rounded-full top-10 left-10"></div>

          <div className="absolute w-96 h-96 bg-[#0A3B2A] blur-[140px] rounded-full bottom-0 right-0"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3B2A]/40 via-[#001A12]/30 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-24 lg:pt-28 lg:pb-32 gap-14 items-center">

          <div>
            <div className="mb-8"></div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Advocacia moderna
              <span className="block text-[#D4B06A]">
                estratégica e digital
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 text-lg leading-relaxed max-w-xl">
              Soluções jurídicas em direito Internacional, civil, trabalhista.
              Atendimento humanizado, estratégico e com foco em resultados.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-md">

              <div>
                <h3 className="text-3xl font-bold">+500</h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Atendimentos realizados
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100%</h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Atendimento digital
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">SC</h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Atuação em Santa Catarina
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section
        id="areas"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Áreas de atuação
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Atendimento jurídico especializado para pessoas físicas e empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Direito Internacional",
              desc: "Assessoria estratégica para empresas e negócios.",
            },
            {
              title: "Direito Família",
              desc: "Execuções de Alimentos, Divórcios, direito voltado a necessidades das Família.",
            },
            {
              title: "Direito Civil",
              desc: "Ações indenizatórias, alimentos, contratos e família.",
            },
            {
              title: "Direito Trabalhista",
              desc: "Defesa de empresas e trabalhadores.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 hover:border-[#D4B06A] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,176,106,0.18)] transition-all duration-500"
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

      {/* SOBRE */}
      <section
        id="sobre"
        className="bg-zinc-900/50 border-y border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <span className="text-[#D4B06A] uppercase tracking-[0.3em] text-sm font-semibold">
              Sobre o advogado
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-black">
              Dr. Sidinei Yares Silva
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-[40px]"
          >

            {/* SLIDE 1 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-black/40 border border-[#D4B06A]/10 rounded-[40px] p-10">

                <div className="relative flex justify-center">
                  <div className="absolute w-72 h-72 bg-[#D4B06A]/20 blur-[120px] rounded-full"></div>

                  <img
                    src="/Sidinei.png"
                    alt="Dr. Sidinei Yares Silva"
                    className="relative w-[420px] h-[520px] object-cover rounded-[32px] border border-[#D4B06A]/20"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#D4B06A]">
                    Apresentação
                  </h3>

                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Advogado atuante na cidade de Joinville, Santa Catarina,
                    inscrito na OAB subseção de Joinville, com atuação
                    estratégica, moderna e humanizada.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
              <div className="bg-black/40 border border-[#D4B06A]/10 rounded-[40px] p-14 text-center">

                <h3 className="text-3xl font-bold mb-8 text-[#D4B06A]">
                  Formação
                </h3>

                <p className="text-zinc-300 text-xl leading-relaxed max-w-4xl mx-auto">
                  Formado em Direito no ano de 2019 pela Universidade
                  Unisociesc da cidade de Joinville, Santa Catarina,
                  com atuação jurídica voltada à excelência técnica,
                  ética profissional e atendimento personalizado.
                </p>
              </div>
            </SwiperSlide>

            {/* SLIDE 3 */}
            <SwiperSlide>
              <div className="bg-black/40 border border-[#D4B06A]/10 rounded-[40px] p-14">

                <h3 className="text-3xl font-bold mb-10 text-center text-[#D4B06A]">
                  Especialidades
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                  {[
                    "Direito Administrativo",
                    "Direito de Família",
                    "Direito Internacional Privado",
                    "Atendimento Jurídico Digital",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-[#D4B06A]/10 bg-zinc-900 p-8 hover:border-[#D4B06A] hover:-translate-y-1 transition-all duration-300"
                    >

                      <p className="text-xl font-semibold text-white">
                        {item}
                      </p>

                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 4 */}
            <SwiperSlide>
              <div className="bg-gradient-to-r from-[#B68A3D] via-[#D4B06A] to-[#E5C98A] rounded-[40px] p-16 text-center text-black">

                <h3 className="text-4xl font-black mb-8">
                  Advocacia moderna e estratégica
                </h3>

                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  Atendimento jurídico focado em resultados,
                  transparência e soluções inteligentes para clientes
                  no Brasil e no exterior.
                </p>

              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <div className="rounded-[40px] bg-gradient-to-r from-[#B68A3D] via-[#D4B06A] to-[#E5C98A] p-14 text-center shadow-2xl">

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
            Precisa de orientação jurídica?
          </h2>

          <p className="mt-6 text-lg text-black/80 max-w-2xl mx-auto">
            Entre em contato agora mesmo e receba um atendimento rápido,
            profissional e estratégico.
          </p>

        </div>
      </section>

    </div>
  );
}