import { useParams, Link } from "react-router-dom"

const ProjectDetail = () => {

  const { id } = useParams()

  return (
    <section className="w-full py-16 px-6">

      <div className="max-w-6xl mx-auto space-y-12">

        <Link to="/" className="text-blue-500">
          ← Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold">
          {id} Project
        </h1>

        {/* 3D MODEL */}
        <div className="w-full bg-gray-100 rounded-xl p-4">

          <model-viewer
            src="/models/cmm.glb"
            camera-controls
            auto-rotate
            shadow-intensity="1"
            class="w-full h-96"
          >
          </model-viewer>

        </div>

        {/* VIDEOS */}
        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              CAD Model Parts
            </h3>

            <video
              controls
              className="w-full rounded-lg"
            >
              <source src="/videos/GantryCMMParts.mp4" type="video/mp4" />
            </video>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Working Demonstration
            </h3>

            <video
              controls
              className="w-full rounded-lg"
            >
              <source src="/videos/GantryCMMWorking.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

        {/* PROJECT DESCRIPTION */}
        <div className="space-y-4">

          <h2 className="text-2xl font-semibold">
            About the Project
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Explain the theory of the project here. You can describe
            what the machine does, what components were used, and the
            engineering principles involved.
          </p>

          <p className="text-gray-700 leading-relaxed">
            You can also write about your personal journey building
            this model — challenges in CAD modelling, simulation,
            or designing the mechanism.
          </p>

        </div>

      </div>

    </section>
  )
}

export default ProjectDetail