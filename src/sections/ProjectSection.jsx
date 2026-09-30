import ProjectCard from "../components/ProjectCard"
import projects from "../projects"

const ProjectSection = () => {
  return (
    <section id="projects" className="scroll-mt-16 w-full bg-slate-200 px-4 py-16 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 mb-10">
          Projects
        </h2>

        {[
          ["CAD Project", projects.filter((project) => project.type === "cad")],
          ["Simulation Project", projects.filter((project) => project.type === "simulation")],
        ].map(([heading, projectGroup]) => (
          <div key={heading}>
            <h2 className="my-10 text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
              {heading}
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {projectGroup.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  cover={project.cover}
                  type={project.type}
                  status={project.status}
                  progress={project.progress}
                />
              ))}
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default ProjectSection