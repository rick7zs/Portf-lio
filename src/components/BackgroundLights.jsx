import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundLights() {
  const light1 = useRef(null);
  const light2 = useRef(null);

  useEffect(() => {
    gsap.to(light1.current, {
      x: 200,
      y: 150,
      scale: 1.4,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(light2.current, {
      x: -180,
      y: -120,
      scale: 1.7,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      {/* Luz azul flutuante */}
      <div
        ref={light1}
        className="absolute left-10 top-20 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px] -z-10"
      ></div>

      {/* Luz roxa flutuante */}
      <div
        ref={light2}
        className="absolute right-0 top-40 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[180px] -z-10"
      ></div>
    </>
  );
}
