const About = () => {

  const skills = [
    "Fusion 360",
    "ANSYS",
    "CFD",
    "FEM",
    "Mechanical Design",
    "CAD Modelling",
    "Motion Simulation",
    "Engineering Design"
  ]

  return (
    <section className="w-full py-16 px-6 bg-gray-100">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            I am a Mechanical Engineering student focused on CAD design,
            mechanical systems, and engineering simulation. I enjoy building
            detailed mechanical assemblies and studying how complex systems
            move and interact.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            My work primarily uses tools like Fusion 360 and ANSYS to model,
            analyze, and visualize mechanical systems. Through these projects
            I explore areas such as metrology systems, mechanical mechanisms,
            and automotive technologies.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Profile Image */}
          <div className="flex justify-center md:justify-center">
            <img
              src={`${import.meta.env.BASE_URL}coverImages/umesh.jpg`}
              alt="Umesh"
              className="w-auto h-54 object-cover rounded-full shadow-md border"
            />
          </div>

          {/* Skills */}
          <div className="space-y-4">

            <h3 className="text-2xl font-semibold">
              Skills & Tools
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
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