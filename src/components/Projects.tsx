import akatsukiImg from "../assets/AkatsukiLogo.png";
const projects = [
  {
    title: "Akatsuki Draft",
    desc: "A modern frontend application showcasing UI design, responsiveness, and interactive components.",
    tech: ["React", "Tailwind", "TypeScript"],
    link: "https://akatsuki-draft-appilcation.vercel.app",
    github: "#",
    image: akatsukiImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-8 md:px-20 py-20"
    >
      <h2 className="text-3xl font-bold text-indigo-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">{p.title}</h3>
            <p className="text-gray-400 mb-3">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-indigo-500 px-3 py-1 rounded text-sm text-white"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Live Demo →
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

