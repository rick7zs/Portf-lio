import { useEffect } from "react";
import gsap from "gsap";

export default function Model3DModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        "#modal-container",
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      id="modal-container"
      className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl"
    >
      {/* BOTÃO FECHAR */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[1000]
                   px-5 py-2 rounded-full text-sm font-medium
                   bg-white/10 text-white
                   hover:bg-white/20 transition"
      >
        Fechar ✕
      </button>

      {/* CONTEÚDO COM SCROLL */}
      <div className="h-full w-full overflow-y-auto scroll-smooth">
        {/* ======================
            SEÇÃO 3D (HERO)
        ======================= */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">
          <h2
            className="text-center text-4xl md:text-5xl font-bold mb-6
                       bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-500
                       bg-clip-text text-transparent"
          >
            Modelagem 3D Logística
          </h2>

          <p className="text-center max-w-2xl text-gray-400 mb-10 leading-relaxed">
            Modelo tridimensional interativo desenvolvido para representar
            um ambiente logístico completo, permitindo análise visual,
            espacial e funcional do projeto.
          </p>

          <div
            className="w-full max-w-6xl h-[70vh] rounded-2xl
                       border border-white/10
                       bg-gradient-to-br from-black via-[#05080f] to-black
                       shadow-[0_0_80px_rgba(168,85,247,0.25)]"
          >
            <model-viewer
              src="/models/modelagem-3d.glb"
              alt="Modelagem 3D Logística"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="1"
              environment-image="neutral"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            />
          </div>
        </section>

        {/* ======================
            DIVISOR VISUAL
        ======================= */}
        <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        {/* ======================
            SEÇÃO VÍDEO BLENDER
        ======================= */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-5xl w-full">
            <h3
              className="text-center text-3xl md:text-4xl font-bold mb-6
                         bg-gradient-to-r from-purple-300 to-fuchsia-400
                         bg-clip-text text-transparent"
            >
              Visualização no Blender
            </h3>

            <p className="text-center text-gray-400 mb-10 leading-relaxed">
              Render e animação desenvolvidos no Blender para validação visual,
              apresentação técnica e demonstração de escala e layout do projeto.
            </p>

            <div
              className="rounded-2xl overflow-hidden
                         border border-white/10
                         shadow-[0_0_60px_rgba(168,85,247,0.25)]"
            >
              <video
                src="/videos/modelagem-blender.mp4"
                controls
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
