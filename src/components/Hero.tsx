const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Vaishnavi Bhamare
        </span>
      </h1>

      <p className="text-gray-400 max-w-xl">
        2nd Year Computer Engineering Student passionate about building modern, scalable and visually rich web applications.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition">
          View Projects
        </a>

        <a href="#contact" className="px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition">
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;