import { useEffect } from "react";
import gsap from "gsap";

export default function ScrollProgress() {
  useEffect(() => {
    gsap.to(".scroll-bar", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
      },
    });
  }, []);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 h-[70vh] w-[3px] bg-white/10 rounded-xl">
      <div className="scroll-bar w-full h-0 bg-cyan-400 rounded-xl"></div>
    </div>
  );
}
