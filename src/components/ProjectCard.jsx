import { Link } from "react-router-dom"

const ProjectCard = ({ id, title, cover, status, progress }) => {

  const CardContent = (
    <div className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden relative">

      {/* Image */}
      <img
        src={`${import.meta.env.BASE_URL}${cover}`}
        alt={title}
        className={`h-40 w-full object-cover ${
          status === "progress" ? "opacity-0" : ""
        }`}
      />

      {/* Overlay for in-progress */}
      {status === "progress" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white px-4">

          <p className="text-sm font-semibold mb-3">
            Work In Progress
          </p>

          {/* Progress bar */}
          <div className="w-3/4 bg-white/30 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <span className="text-xs mt-2">
            {progress}% complete
          </span>

        </div>
      )}

      {/* Title */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
      </div>

    </div>
  )

  if (status === "progress") {
    return CardContent
  }

  return <Link to={`/project/${id}`}>{CardContent}</Link>
}

export default ProjectCard