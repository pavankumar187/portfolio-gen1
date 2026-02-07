interface NavigationProps {
  onNavigate?: (page: string) => void;
}

function Navigation({ onNavigate }: NavigationProps) {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 shadow-lg">
      <button
        onClick={() => handleNavClick('home')}
        className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        ProFolio
      </button>

      <div className="flex gap-8">
        <button
          onClick={() => handleNavClick('portfolio')}
          className="relative text-slate-300 font-medium px-0 py-2 transition-colors duration-300 hover:text-sky-400 group"
        >
          Portfolio Generation
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button
          onClick={() => handleNavClick('resume')}
          className="relative text-slate-300 font-medium px-0 py-2 transition-colors duration-300 hover:text-sky-400 group"
        >
          Resume Generation
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button
          onClick={() => handleNavClick('login')}
          className="bg-sky-400 text-slate-900 px-6 py-2 rounded-full font-bold transition-all duration-300 hover:bg-sky-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-400/40"
        >
          Login/Signup
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
