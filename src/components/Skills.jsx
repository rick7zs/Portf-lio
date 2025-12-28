import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiVite,
  SiMysql,
  SiBlender,
} from "react-icons/si";

import powerbiIcon from "../assets/powerbi.svg";
import excelIcon from "../assets/excel.svg";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "JavaScript", level: 90, icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", level: 88, icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", level: 85, icon: SiNodedotjs, color: "text-green-400" },
  { name: "HTML", level: 92, icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", level: 95, icon: SiCss3, color: "text-blue-500" },
  { name: "Vite", level: 70, icon: SiVite, color: "text-purple-400" },
  { name: "SQL", level: 78, icon: SiMysql, color: "text-blue-300" },
  { name: "Blender 3D", level: 75, icon: SiBlender, color: "text-orange-400" },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    /* =========================
       ANIMAÇÃO DO TÍTULO
    ========================== */

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

    // Brilho pulsante contínuo
    gsap.to(titleRef.current, {
      textShadow:
        "0 0 12px rgba(217,70,239,0.6), 0 0 30px rgba(168,85,247,0.5)",
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    /* =========================
       ANIMAÇÃO DAS BARRAS
    ========================== */

    barsRef.current.forEach((bar, index) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${skills[index].level}%`,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 bg-[#05080f] min-h-screen"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* TÍTULO COM BRILHO */}
        <h2
          ref={titleRef}
          className="text-center text-5xl md:text-6xl font-extrabold mb-20
                     bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-500
                     bg-clip-text text-transparent tracking-tight"
        >
          Skills & Tecnologias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl
                           border border-purple-500/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Icon className={`text-3xl ${skill.color}`} />
                    <span className="text-lg font-semibold text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    ref={(el) => (barsRef.current[index] = el)}
                    className="h-full rounded-full
                               bg-gradient-to-r from-purple-500 to-fuchsia-500"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            );
          })}

          {/* EXCEL */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img src={excelIcon} className="w-8 h-8" alt="Excel" />
                <span className="text-lg font-semibold text-white">Excel</span>
              </div>
              <span className="text-sm text-gray-400">97%</span>
            </div>

            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r
                           from-purple-500 to-fuchsia-500"
                style={{ width: "97%" }}
              />
            </div>
          </div>

          {/* POWER BI */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img src={powerbiIcon} className="w-8 h-8" alt="Power BI" />
                <span className="text-lg font-semibold text-white">
                  Power BI
                </span>
              </div>
              <span className="text-sm text-gray-400">96%</span>
            </div>

            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r
                           from-purple-500 to-fuchsia-500"
                style={{ width: "96%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
