import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Model3DModal from "./Model3DModal";
import PowerBIModal from "./PowerBIModal";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const titleRef = useRef(null);

  const [open3D, setOpen3D] = useState(false);
  const [openPowerBI, setOpenPowerBI] = useState(false);
  const [powerBIUrl, setPowerBIUrl] = useState("");

  const projects = [
    {
      title: "Modelagem 3D",
      description: "Modelo 3D completo de um projeto logístico.",
      tech: ["TinkerCAD", "Blender"],
      type: "3d",
    },
    {
      title: "Site Institucional",
      description:
        "Website moderno com animações, Sistema WMS integrado e performance otimizada.",
      tech: ["JavaScript", "React", "Vite", "Tailwind", "HTML", "CSS", "Node.js"],
      type: "link",
      url: "https://henriquelogfusion.netlify.app",
    },
    {
      title: "Dashboard Power BI",
      description:
        "Análise de dados industriais com KPIs, gráficos e insights estratégicos.",
      tech: ["Power BI", "Excel"],
      type: "powerbi",
      url: "https://app.powerbi.com/reportEmbed?reportId=0284bb25-9649-48c8-b6d0-b214907de679&autoAuth=true&ctid=50762edc-f950-4f48-b439-ec342282600c",
    },
  ];

  useEffect(() => {
    /* ENTRADA DO TÍTULO */
    gsap.fromTo(
      titleRef.current,
      {
        y: 60,
        opacity: 0,
        filter: "blur(12px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    /* BRILHO PULSANTE */
    gsap.to(titleRef.current, {
      textShadow:
        "0 0 12px rgba(217,70,239,0.6), 0 0 30px rgba(168,85,247,0.5)",
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const handleProjectClick = (project) => {
    if (project.type === "3d") {
      setOpen3D(true);
    }

    if (project.type === "link" && project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }

    if (project.type === "powerbi" && project.url) {
      setPowerBIUrl(project.url);
      setOpenPowerBI(true);
    }
  };

  return (
    <>
      <section
        id="projetos"
        className="relative min-h-screen py-32 px-6 bg-[#05080f]"
      >
        <div className="max-w-7xl mx-auto">
          {/* TÍTULO */}
          <h2
            ref={titleRef}
            className="font-display text-center text-6xl md:text-7xl font-bold mb-20
                       bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-500
                       bg-clip-text text-transparent tracking-tight"
          >
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-full rounded-3xl p-10
                           backdrop-blur-xl bg-white/5 border border-white/10
                           transition-all duration-500
                           hover:-translate-y-3
                           hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl
                                bg-gradient-to-br from-purple-500/20 via-transparent to-fuchsia-500/20
                                opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full
                                   bg-purple-500/10 text-purple-300
                                   border border-purple-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BOTÃO */}
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="mt-auto inline-flex items-center gap-2 w-fit
                               px-6 py-2 rounded-full text-sm font-semibold
                               bg-gradient-to-r from-purple-500 to-fuchsia-500
                               text-white hover:scale-105 transition"
                  >
                    Ver projeto
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAIS */}
      <Model3DModal open={open3D} onClose={() => setOpen3D(false)} />

      <PowerBIModal
        open={openPowerBI}
        url={powerBIUrl}
        onClose={() => setOpenPowerBI(false)}
      />
    </>
  );
}
