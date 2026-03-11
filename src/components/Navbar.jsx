import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="w-full bg-gray-900 text-white sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a
          href="https://umesh4ever.github.io/umesh-mech-projects/"
          className="text-xl font-semibold hover:text-gray-300 transition"
        >
          Umesh
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">

          <button
            onClick={() => {
              if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
              } else {
                  navigate("/")
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }, 100)
                }
            }}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Home
          </button>

          <button
            onClick={() => {
              if (location.pathname === "/") {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              } else {
                navigate("/")
                setTimeout(() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }, 100)
              }
            }}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Projects
          </button>

          <a
            href={`${import.meta.env.BASE_URL}resume/CoreResume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            Resume
          </a>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-gray-300 transition"
            >
              Contact
            </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          <button
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" })
              } else {
                navigate("/")
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100)
              }
              setMenuOpen(false)
            }}
            className="cursor-pointer hover:text-gray-300 transition text-left"
          >         
            Home
          </button>

          <button
            onClick={() => {
              if (location.pathname === "/") {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              } else {
                navigate("/")
                setTimeout(() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }, 100)
              }
            
              setMenuOpen(false)
            }}
            className="cursor-pointer hover:text-gray-300 transition text-left"
          >
            Projects
          </button>

          <a
            href={`${import.meta.env.BASE_URL}resume/CoreResume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer bg-blue-600 px-2 py-1 rounded hover:bg-blue-700 transition w-fit"
          >
            Resume
          </a>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              setMenuOpen(false)
            }}
            className="cursor-pointer hover:text-gray-300 transition text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
