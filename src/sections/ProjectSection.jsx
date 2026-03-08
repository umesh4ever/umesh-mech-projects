import ProjectCard from "../components/ProjectCard"

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full py-20 px-10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title="Gantry CMM"
            id="cmm"
          />

          <ProjectCard
            title="Geneva Mechanism"
            id="geneva"
          />

          <ProjectCard
            title="DRS Mechanism"
            id="drs"
          />

        </div>

      </div>

    </section>
  )
}

export default ProjectSection