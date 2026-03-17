import { useParams } from "react-router-dom"
import projects from "../data/projects"
import { useEffect } from "react";

const ProjectDetail = () => {

    useEffect(() => {
    // This runs once when the component mounts
      window.scrollTo(0, 0);
    }, []);

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
          className="w-auto lg:mx-20 h-96 rounded-xl bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 shadow-xl"
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
            <h2 className="text-2xl font-semibold">Project Title & Overview</h2>
            <p>{project.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">About the Gantry CMM</h2>
            <p>{project.structure}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Working Principle</h2>
            <p>{project.working}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Personal Learning</h2>
            <p>{project.learning}</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectDetail