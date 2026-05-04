const experiences = [
  {
    title: "Fresher",
    description:
      "Actively building projects and improving development skills.",
    icon: "💻",
  },
];

const Experience = () => {
  return (
    <section className="px-8 md:px-20 py-20 bg-gray-900/40">
      <h2 className="text-3xl font-bold text-indigo-400 mb-10">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition"
          >
            <div className="text-4xl">{exp.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400">{exp.title}</h3>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;