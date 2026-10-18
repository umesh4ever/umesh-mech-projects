import { useEffect, useState } from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { canOpenPersonalNotes } from "../config/siteConfig"

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)
  const [accessCode, setAccessCode] = useState("")
  const [error, setError] = useState("")
  const [notes, setNotes] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const closePersonalNotes = () => {
    setIsModalOpen(false)
    setHasAccess(false)
    setAccessCode("")
    setError("")
    setNotes("")
    setIsLoading(false)
  }

  useEffect(() => {
    if (!hasAccess) return undefined

    const controller = new AbortController()

    fetch(`${import.meta.env.BASE_URL}notes/TnP_List.txt`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load the notes.")
        return response.text()
      })
      .then(setNotes)
      .catch((fetchError) => {
        if (fetchError.name !== "AbortError") {
          setError("Could not load the list. Please try again later.")
        }
      })
      .finally(() => setIsLoading(false))

    return () => controller.abort()
  }, [hasAccess])

  useEffect(() => {
    if (!isModalOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePersonalNotes()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen])

  const handleCodeSubmit = (event) => {
    event.preventDefault()

    if (!canOpenPersonalNotes(accessCode)) {
      setError("That code did not match. Try again.")
      return
    }

    setError("")
  setIsLoading(true)
    setHasAccess(true)
  }

  return (
    <footer className="w-full bg-gray-900 text-white py-8">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        <h2 className="text-lg font-semibold">
          Connect with{" "}
          <button
            type="button"
            aria-label="Open personal notes"
            onClick={() => setIsModalOpen(true)}
            className="cursor-text rounded-sm text-inherit hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            me
          </button>
        </h2>

        <div className="flex gap-10 text-2xl">

          <a
            href="https://www.linkedin.com/in/umesh-b7066627b/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/umesh26710051?t=osNStRsMP5N1hCn3TWjRVg&s=09"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/umesh4ever"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>

        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Umesh
        </p>

      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePersonalNotes()
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="personal-notes-title"
            className="w-full max-w-xl rounded-xl border border-slate-700 bg-slate-900 p-6 text-white shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h2 id="personal-notes-title" className="text-2xl font-bold">
                {hasAccess ? "Personal Notes" : "Enter code"}
              </h2>
              <button
                type="button"
                onClick={closePersonalNotes}
                aria-label="Close and hide personal notes"
                className="rounded px-2 text-2xl leading-none text-slate-300 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                ×
              </button>
            </div>

            {hasAccess ? (
              <>
                <div className="max-h-[60vh] overflow-auto rounded-lg bg-slate-950 p-4">
                  {isLoading ? (
                    <p className="text-slate-300">Loading list...</p>
                  ) : error ? (
                    <p role="alert" className="text-rose-300">{error}</p>
                  ) : (
                    <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-slate-100">
                      {notes}
                    </pre>
                  )}
                </div>
                <button
                  type="button"
                  onClick={closePersonalNotes}
                  className="mt-6 rounded-lg bg-slate-700 px-4 py-2 font-semibold transition hover:bg-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Hide notes
                </button>
              </>
            ) : (
              <form onSubmit={handleCodeSubmit}>
                <label htmlFor="personal-notes-code" className="mb-2 block text-sm text-slate-300">
                  Secret code
                </label>
                <input
                  id="personal-notes-code"
                  type="password"
                  value={accessCode}
                  onChange={(event) => setAccessCode(event.target.value)}
                  autoFocus
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                />
                {error && <p role="alert" className="mt-2 text-sm text-rose-300">{error}</p>}
                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-cyan-600 px-4 py-2 font-semibold transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Unlock
                </button>
              </form>
            )}
          </section>
        </div>
      )}

    </footer>
  )
}

export default Footer