import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[100vh] flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-6">
        {/* Tiêu đề */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Van Dat
        </h1>

        {/* Đoạn mô tả */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          I’m a{" "}
          <span className="text-white font-medium">
            Software Engineering student
          </span>
          with a strong passion for{" "}
          <span className="text-white font-medium">Backend Development</span>.
          I’m eager to gain hands-on experience through internships, enhance my
          technical skills, and contribute meaningful value to both the company
          and the community.
        </p>

        {/* Nút điều hướng */}
        <div className="flex justify-center gap-4 flex-wrap">
          <NavLink
            to="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium transition duration-300 shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </NavLink>

          <NavLink
            to="#contact"
            className="border border-blue-500 text-blue-400 py-3 px-6 rounded-md font-medium transition duration-300 hover:bg-blue-500 hover:bg-blue-500"
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </section>
  );
};
