import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const [init, setInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: "transparent" },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, // Connects lines to mouse
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#60a5fa" }, // Light blue engineering theme
      links: {
        color: "#60a5fa",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: { enable: true, speed: 1, direction: "none", outModes: "out" },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <header className="relative w-full py-6 px-6 lg:py-12  bg-slate-900 text-white overflow-hidden">
      {/* Particles Container */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Content Container - Added relative and z-10 to stay above particles */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-7">
        <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight">
          Umesh
        </h1>

        <h2 className="text-xl md:text-2xl text-blue-400 font-mono uppercase tracking-widest">
          Mechanical Engineering • CAD Design • Simulation
        </h2>

        <p className="md:text-lg text-gray-300 text-lg max-w-2xl leading-relaxed">
          I design mechanical systems and engineering models using tools like
          Fusion 360 and ANSYS. This portfolio showcases my work in CAD
          modelling, motion mechanisms, and engineering simulations.
        </p>

        <div className="flex gap-5 pt-6">

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
    className="bg-blue-600 px-8 py-3 font-semibold rounded-full hover:bg-blue-700 transition-all hover:scale-105 cursor-pointer"
  >
    View Projects
  </button>

  <button
    onClick={() => {
      if (location.pathname === "/") {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" })
      } else {
        navigate("/")
        setTimeout(() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }}
    className="border border-gray-500 px-8 py-3 font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all cursor-pointer"
  >
    Contact
  </button>

</div>
      </div>
    </header>
  );
};

export default Header;
