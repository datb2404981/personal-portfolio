import Marquee from "react-fast-marquee";
import { FaNodeJs, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiPrisma } from "react-icons/si";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-[#0a0a0a] via-[#0b1324] to-[#0a0a0a] relative"
    >
      {/* Hiệu ứng ánh sáng nền dịu */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.06),transparent_80%)] pointer-events-none"></div>

      {/* Tiêu đề */}
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(59,130,246,0.25)] relative z-10">
        My Skills
      </h2>

      {/* Dòng icon chạy ngang */}
      <div className="overflow-hidden relative z-10">
        <Marquee speed={35} gradient={false}>
          <div className="flex items-center gap-16 px-6">
            <FaNodeJs className="text-6xl text-green-500 hover:scale-110 transition-transform" />
            <SiJavascript className="text-6xl text-yellow-400 hover:scale-110 transition-transform" />
            <FaReact className="text-6xl text-blue-400 hover:scale-110 transition-transform" />
            <SiPrisma className="text-6xl text-blue-500 hover:scale-110 transition-transform" />
            <SiMysql className="text-6xl text-yellow-500 hover:scale-110 transition-transform" />
            <SiMongodb className="text-6xl text-green-400 hover:scale-110 transition-transform" />
            <FaDocker className="text-6xl text-blue-600 hover:scale-110 transition-transform" />
            <FaGitAlt className="text-6xl text-orange-500 hover:scale-110 transition-transform" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};
