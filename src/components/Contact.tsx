const Contact = () => {
  return (
    <section
      id="contact"
      className="px-8 md:px-20 py-20 text-center"
    >
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Contact</h2>

      <p className="text-gray-400 mb-4">
        Let's connect and build something amazing together.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition">
          <p className="text-gray-400">Email</p>
          <p className="text-indigo-400">vaishnavibhamare13@gmail.com</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition">
          <p className="text-gray-400">Phone</p>
          <p className="text-indigo-400">+91 80801 74205</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;