import { Link } from "react-router-dom"

const ProjectCard = ({ title, id }) => {
  return (
    <Link to={`/project/${id}`}>

      <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer">

        <div className="h-40 bg-gray-200 rounded mb-4"></div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

      </div>

    </Link>
  )
}

export default ProjectCard