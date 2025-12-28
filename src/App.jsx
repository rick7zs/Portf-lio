import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


import minhaFoto from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-200">

      <Navbar />
      <Hero fotoPerfil={minhaFoto} />

      <About />
      <Skills />
      <Projects />
      

    </div>
  );
}
