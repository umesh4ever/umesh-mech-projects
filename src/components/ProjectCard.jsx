import { Link } from "react-router-dom"
import projects from "../data/projects"

const ProjectCard = ({ id, title, cover }) => {
  // const { id } = useParams()
  // const project = projects[id]

  return (
    <Link to={`/project/${id}`}>

      <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden">

        <img
          src={`${import.meta.env.BASE_URL}${cover}`}
          alt={title}
          className="h-40 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold">
            {title}
          </h3>
        </div>

      </div>

    </Link>
  )
}

export default ProjectCard