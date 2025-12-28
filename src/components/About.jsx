export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-32 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* FUNDO CONTINUADO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050b14] via-[#080f1d] to-[#0b1020]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(180,0,255,0.15),transparent_55%)]" />

      {/* CARD SOBRE */}
      <div
        className="
          relative z-10 w-full max-w-6xl
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          rounded-[32px]
          p-16
          shadow-[0_0_120px_rgba(120,0,255,0.15)]
        "
      >
        {/* TÍTULO */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-purple-300">
            Sobre mim
          </p>
          <h2 className="text-5xl font-extrabold mt-2 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
            Quem é o Henrique Dourado?
          </h2>
        </div>

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* TEXTO */}
          <div className="text-gray-300 text-lg leading-relaxed">
            <p>
              Sou um desenvolvedor focado em criar soluções digitais de alto
              impacto, unindo <span className="text-purple-300 font-semibold">engenharia</span>,
              <span className="text-purple-300 font-semibold"> design</span> e
              <span className="text-purple-300 font-semibold"> dados</span>.
            </p>

            <p className="mt-6">
              Atuo no desenvolvimento de aplicações modernas, dashboards
              estratégicos e interfaces premium, sempre priorizando performance,
              estética e experiência do usuário.
            </p>

            <p className="mt-6">
              Meu diferencial está em transformar dados complexos e ideias
              abstratas em produtos digitais claros, elegantes e eficientes.
            </p>
          </div>

          {/* DESTAQUES */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "+1 anos", desc: "Experiência prática" },
              { title: "Full Stack", desc: "Front + Back" },
              { title: "Design", desc: "Padrão moderno e premium" },
              { title: "Dados", desc: "Power BI & Analytics" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl p-6
                  bg-white/5
                  border border-white/10
                  hover:border-purple-400/40
                  transition
                "
              >
                <h3 className="text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
