const About = () => {

  const skills = [
    "Siemens NX",
    "ANSYS",
    "Fusion 360",
    "Assembly design",
    "Engineering Drawing",
    "PyAnsys",
  ]

  return (
    <section className="w-full bg-blue-50 px-6 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            I am a Mechanical Engineering student focused on mechanical design, CAD modelling, and engineering simulation. I enjoy turning mechanical concepts into detailed models and studying how they move, behave, and perform.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            My work uses Siemens NX, Fusion 360, and ANSYS, covering mechanical assemblies, mechanisms, automotive systems, CFD, FEM, and structural analysis. I aim to combine design and simulation to build better-engineered systems.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Profile Image */}
          <div className="flex justify-center md:justify-center">
            <img
              src={`${import.meta.env.BASE_URL}coverImages/umesh.jpg`}
              alt="Umesh"
              className="h-54 w-auto rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>

          {/* Skills */}
          <div className="space-y-4">

            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              Skills & Tools
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="cursor-default rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700 hover:shadow-[0_8px_18px_rgba(37,99,235,0.16)]"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About