export const About = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.05),transparent_75%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-500">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            I’m a{" "}
            <span className="text-white font-medium">
              Software Engineering student
            </span>{" "}
            with a strong interest in{" "}
            <span className="text-white font-medium">Backend Development</span>.
            I’m passionate about learning new technologies and improving my
            skills every day.
          </p>
        </div>
      </div>
    </section>
  );
};
