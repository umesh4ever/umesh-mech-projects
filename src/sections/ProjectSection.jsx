import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects"

const ProjectSection = () => {
  return (
    <section id="projects" className="scroll-mt-16 w-full bg-slate-200 px-4 py-16 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 mb-10">
          Projects
        </h2>

        <div>
          <h2 className="my-10 text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">CAD Project</h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          <ProjectCard
            title={projects.discBrake.title}
            id="discBrake"
            cover={projects.discBrake.cover}
          />

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

          <ProjectCard
            title={projects.shockAbsorber.title}
            id="shockAbsorber"
            cover={projects.shockAbsorber.cover}
          />

        </div>
        </div>

        <div>
          <h2 className="my-10 text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">Simulation Project</h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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