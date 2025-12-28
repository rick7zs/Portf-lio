export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-gray-200">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-cyan-300 tracking-wide">
          Eng.henrique
        </h1>

        {/* MENU */}
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <a href="#inicio" className="hover:text-cyan-300 transition">
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-cyan-300 transition">
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-300 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-cyan-300 transition">
              Projetos
            </a>
          </li>
          
        
        </ul>

      </div>
    </nav>
  );
}
