const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/5 border-b border-white/10 px-8 py-4 flex justify-between items-center z-50">

      <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Samruddhi.dev
      </h1>

      <div className="space-x-6 hidden md:flex text-sm">
        <a href="#about" className="hover:text-indigo-400 transition">About</a>
        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
      </div>

    </nav>
  );
};

export default Navbar;