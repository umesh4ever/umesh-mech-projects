import { Link } from "react-router-dom"

const cardStyles = {
  cad: {
    complete: {
      card: "border-cyan-200",
      badge: "border-cyan-300/60 bg-cyan-400/10 text-green-600",
    },
    progress: {
      card: "border-amber-200",
      badge: "border-amber-300/60 bg-amber-400/10 text-amber-700",
    },
  },
  simulation: {
    complete: {
      card: "border-violet-200",
      badge: "border-violet-300/60 bg-violet-400/10 text-green-600",
    },
    progress: {
      card: "border-amber-200",
      badge: "border-amber-300/60 bg-amber-400/10 text-amber-700",
    },
  },
}

const ProjectCard = ({ id, title, cover, type, status, progress }) => {
  const currentStatus = status || "complete"
  const style = cardStyles[type]?.[currentStatus] || cardStyles.cad.complete
  const coverSource = cover && (cover.startsWith("/") || cover.startsWith("http")
    ? cover
    : `${import.meta.env.BASE_URL}${cover}`)

  const CardContent = (
    <div className={`group relative cursor-pointer overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg ${style.card}`}>

      {/* Image */}
      {coverSource ? (
        <img
          src={coverSource}
          alt={title}
          className={`h-28 w-full object-cover sm:h-40 ${
            status === "progress" ? "opacity-0" : ""
          }`}
        />
      ) : (
        <div className="h-28 w-full bg-slate-700 sm:h-40" aria-hidden="true" />
      )}

      <span className={`absolute right-3 top-3 z-20 rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${style.badge}`}>
        {currentStatus === "complete" ? "Complete" : "In progress"}
      </span>

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
            {progress ?? 0}% complete
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