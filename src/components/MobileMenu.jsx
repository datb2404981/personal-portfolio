import { NavLink } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <NavLink
        to="/"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        About
      </NavLink>
      <NavLink
        to="#projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </NavLink>
      <NavLink
        to="#contract"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </NavLink>
    </div>
  );
};
