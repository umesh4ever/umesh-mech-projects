import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesOptions = {
  background: { color: "transparent" },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: { distance: 150, links: { opacity: 0.5 } },
    },
  },
  particles: {
    color: { value: "#60a5fa" },
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
}

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
        <h1 className="cursor-default text-5xl font-bold leading-tight tracking-tight transition duration-300 hover:text-blue-300 md:text-5xl">
          Umesh
        </h1>

        <h2 className="text-xl font-mono uppercase tracking-widest text-blue-400 md:text-2xl">
          Mechanical Engineering • CAD Design • CAE Simulation
        </h2>

        <p className="md:text-lg text-gray-300 text-lg max-w-2xl leading-relaxed">
          I design, model, and simulate mechanical systems — from detailed CAD assemblies and mechanisms to CFD and structural analysis. My work combines Siemens NX, Fusion 360, and ANSYS to turn engineering concepts into detailed, testable models.
        </p>

        <div className="grid w-full max-w-sm grid-cols-1 gap-3 pt-6 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4">

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
    className="w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_10px_24px_rgba(37,99,235,0.35)] cursor-pointer sm:w-auto sm:px-7 sm:text-base"
  >
    View Projects
  </button>

  <button
    onClick={() => {
      if (location.pathname === "/") {
        document
          .getElementById("notes")
          ?.scrollIntoView({ behavior: "smooth" })
      } else {
        navigate("/")
        setTimeout(() => {
          document
            .getElementById("notes")
            ?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }}
    className="w-full rounded-full border border-blue-400 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:text-slate-900 hover:shadow-[0_10px_24px_rgba(96,165,250,0.25)] cursor-pointer sm:w-auto sm:px-7 sm:text-base"
  >
    View Notes
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
    className="w-full rounded-full border border-gray-500 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-gray-900 hover:shadow-[0_10px_24px_rgba(255,255,255,0.18)] cursor-pointer sm:w-auto sm:px-7 sm:text-base"
  >
    Contact
  </button>

</div>
      </div>
    </header>
  );
};

export default Header;
