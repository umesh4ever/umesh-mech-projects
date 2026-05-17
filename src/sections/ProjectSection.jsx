import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects"

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full py-10 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div>
          <h2 className="text-3xl font-semibold my-10 font-serif" >CAD Project</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title={projects.cmm.title}
            id="cmm"
            cover={projects.cmm.cover}
          />

          <ProjectCard
            title={projects.geneva.title}
            id="geneva"
            cover={projects.geneva.cover}
          />

        </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold my-10 font-serif" >Simulation Project</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          <ProjectCard
            title={projects.truck.title}
            id="truck"
            cover={projects.truck.cover}
          />

          <ProjectCard
            title={projects.drs.title}
            id="drs"
            cover={projects.drs.cover}
            status="progress"
            progress = {90}
          />

        </div>
        </div>

      </div>

    </section>
  )
}

export default ProjectSection