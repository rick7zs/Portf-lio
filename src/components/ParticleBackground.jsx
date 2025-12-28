import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  async function init(main) {
    await loadFull(main);
  }

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#00eaff" },
          size: { value: 2 },
          move: { enable: true, speed: 0.6 },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
}
