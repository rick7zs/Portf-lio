import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero({ fotoPerfil }) {
  const hero = useRef(null);
  const card = useRef(null);
  const photo = useRef(null);
  const holo = useRef(null);

  // FUNÇÃO ATUALIZADA PARA O WHATSAPP
  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=%2B5518991127430&text=Fala%20Henrique,%20quero%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA&type=phone_number&app_absent=0";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!card.current || !hero.current || !photo.current || !holo.current) return;

    // Animação de entrada do Hero
    gsap.fromTo(
      hero.current,
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // Animação do Card
    gsap.fromTo(
      card.current,
      { opacity: 0, y: 40, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.6,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // Animação da Foto
    gsap.fromTo(
      photo.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.6,
        delay: 0.6,
        ease: "power2.out",
      }
    );

    // Flutuação da foto
    gsap.to(photo.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });

    // Efeito Holográfico
    gsap.to(holo.current, {
      opacity: 0.35,
      repeat: -1,
      duration: 3,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Efeito Tilt (3D) no Card
    const handleMove = (e) => {
      const rect = card.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotX = (y - rect.height / 2) / 25;
      const rotY = (x - rect.width / 2) / 25;

      gsap.to(card.current, {
        rotationX: -rotX,
        rotationY: rotY,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const resetTilt = () => {
      gsap.to(card.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    card.current.addEventListener("mousemove", handleMove);
    card.current.addEventListener("mouseleave", resetTilt);

    return () => {
      if (card.current) {
        card.current.removeEventListener("mousemove", handleMove);
        card.current.removeEventListener("mouseleave", resetTilt);
      }
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={hero}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051622] via-[#0b0e19] to-[#12001f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(200,0,255,0.25),transparent_60%)]" />

      {/* CARD */}
<div
  ref={card}
  className="
    relative z-10 w-full max-w-6xl 
    p-8 md:p-14           /* Padding menor no mobile */
    bg-[#0b0e19]/60 backdrop-blur-2xl rounded-[32px]
    border border-purple-400/20
    shadow-[0_0_130px_20px_rgba(150,0,255,0.15)]
    flex flex-col-reverse md:flex-row /* Empilha no mobile, lado a lado no desktop */
    items-center gap-10 md:gap-14
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* TEXTO */}
        <div className="flex-1" style={{ transform: "translateZ(60px)" }}>
          <p className="text-purple-300 text-sm uppercase tracking-widest">
            FullStack • Ciência de Dados
          </p>

          <h1 className="
            text-7xl font-extrabold leading-tight mt-3
            bg-gradient-to-r from-white via-purple-200 to-purple-500
            bg-clip-text text-transparent
          ">
            Desenvolvedor de projetos
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mt-5">
            Desenvolvimento de interfaces de alto impacto, especialista em análise de dados
            e ênfase em Modelagem 3D.
          </p>

          {/* BOTÃO ATUALIZADO */}
          <button
            onClick={handleWhatsAppClick}
            className="
              mt-7 px-8 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-purple-600 to-purple-800
              shadow-[0_0_25px_rgba(150,0,255,0.5)]
              hover:shadow-[0_0_40px_rgba(150,0,255,0.7)]
              transition relative overflow-hidden active:scale-95
            "
          >
            <span className="relative z-10">Solicitar Projeto</span>
            <span className="absolute inset-0 bg-white/20 blur-3xl opacity-20" />
          </button>
        </div>

        {/* FOTO */}
  <div
    ref={photo}
    className="
      relative 
      w-[220px] h-[220px] md:w-[290px] md:h-[290px] /* Tamanho responsivo */
      rounded-3xl overflow-hidden
      shadow-[0_0_60px_rgba(150,0,255,0.4)]
          "
          style={{ transform: "translateZ(100px)" }}
        >
          <img
            src={fotoPerfil}
            alt="Foto perfil"
            className="w-full h-full object-cover"
          />

          <div
            ref={holo}
            className="
              absolute inset-0
              bg-[linear-gradient(45deg,rgba(255,255,255,0.12),rgba(0,0,255,0.07),rgba(255,0,255,0.1))]
              mix-blend-overlay opacity-20
            "
          />
        </div>
      </div>
    </section>
  );
}