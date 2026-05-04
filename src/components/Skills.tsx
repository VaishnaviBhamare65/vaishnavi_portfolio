const skills = [
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-8 md:px-20 py-20 bg-gray-900/40"
    >
      <h2 className="text-3xl font-bold text-indigo-400 mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex flex-col items-center hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition"
          >
            <img src={s.img} alt={s.name} className="w-12 h-12 mb-3" />
            <p className="text-white">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;