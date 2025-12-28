export default function Services() {
  return (
    <section
      id="servicos"
      className="
        min-h-screen
        flex flex-col
        items-center
        justify-center
        text-center
        px-10
        scroll-mt-24
      "
    >
      <h2 className="text-5xl font-bold text-purple-300 mb-10">
        Serviços
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">
        {[
          "Websites Premium",
          "Sistemas Web",
          "Interfaces Futuristas",
        ].map((s) => (
          <div
            key={s}
            className="
              p-8
              bg-white/5
              border border-white/10
              rounded-2xl
              backdrop-blur-xl
              transition
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(150,0,255,0.25)]
            "
          >
            <h3 className="text-2xl font-semibold text-white">
              {s}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
