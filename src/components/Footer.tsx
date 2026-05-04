const Footer = () => {
  return (
    <footer
      className="relative mt-10"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-6"></div>

      <div className="text-center pb-6">
        <p className="text-gray-400">
          Built with ❤️ by <span className="text-indigo-400">Vaishnavi Bhamare</span>
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-2">© 2026 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;