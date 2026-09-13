import { Link } from "react-router-dom"

const ProjectCard = ({ id, title, cover, status, progress }) => {

  const CardContent = (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">

      {/* Image */}
      <img
        src={`${import.meta.env.BASE_URL}${cover}`}
        alt={title}
        className={`h-28 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40 ${
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
      <div className="min-h-20 p-3 sm:min-h-24 sm:p-6">
        <h3 className="text-sm font-semibold leading-snug text-slate-800 sm:text-xl">
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