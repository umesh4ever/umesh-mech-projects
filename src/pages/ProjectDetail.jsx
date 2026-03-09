import { useParams } from "react-router-dom"
import projects from "../data/projects"

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects[id]

  if (!project) return <p>Project not found</p>

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold">{project.title}</h1>

        {/* 3D Model */}
        <model-viewer
          src={`${import.meta.env.BASE_URL}${project.model}`}
          camera-controls
          auto-rotate
          className="w-full h-96"
        ></model-viewer>

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-8">

          <video controls className="w-full rounded-lg">
            <source
              src={`${import.meta.env.BASE_URL}${project.videos[0]}`}
              type="video/mp4"
            />
          </video>

          <video controls className="w-full rounded-lg">
            <source
              src={`${import.meta.env.BASE_URL}${project.videos[1]}`}
              type="video/mp4"
            />
          </video>

        </div>

        {/* Description */}
        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p>{project.overview}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Mechanical Structure</h2>
            <p>{project.structure}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Working Principle</h2>
            <p>{project.working}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Personal Learning</h2>
            <p>{project.learning}</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectDetail