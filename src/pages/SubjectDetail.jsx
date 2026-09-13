import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Document, Page, pdfjs } from "react-pdf"
import subjects from "../data/subjects"

import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString()

const PdfViewer = ({ file, title }) => {
  const viewerRef = useRef(null)
  const [pageCount, setPageCount] = useState(null)
  const [viewerWidth, setViewerWidth] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [error, setError] = useState(false)

  useEffect(() => {
    const viewer = viewerRef.current

    if (!viewer) return undefined

    const updateWidth = () => setViewerWidth(viewer.clientWidth - 32)
    const resizeObserver = new ResizeObserver(updateWidth)

    updateWidth()
    resizeObserver.observe(viewer)

    return () => resizeObserver.disconnect()
  }, [])

  const handleLoadSuccess = ({ numPages }) => {
    setPageCount(numPages)
    setError(false)
  }

  if (error) {
    return (
      <p className="rounded-lg bg-red-50 p-6 text-center text-red-700">
        This PDF could not be displayed. Use &quot;Open separately&quot; above to view it.
      </p>
    )
  }

  return (
    <div ref={viewerRef} className="w-full overflow-x-auto">
      <div className="mb-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setZoom((currentZoom) => Math.max(0.75, currentZoom - 0.1))}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1 text-lg font-semibold hover:border-blue-400"
          aria-label="Zoom out"
        >
          -
        </button>
        <span className="min-w-16 text-center text-sm font-medium text-slate-600">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          onClick={() => setZoom((currentZoom) => Math.min(1.5, currentZoom + 0.1))}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1 text-lg font-semibold hover:border-blue-400"
          aria-label="Zoom in"
        >
          +
        </button>
      </div>

      <Document
        file={file}
        onLoadSuccess={handleLoadSuccess}
        onLoadError={() => setError(true)}
        loading={<p className="p-8 text-center text-slate-500">Loading PDF...</p>}
        error={<p className="p-8 text-center text-red-700">Unable to load this PDF.</p>}
      >
        {pageCount && viewerWidth > 0 && (
          <div className="space-y-5">
            {Array.from({ length: pageCount }, (_, index) => (
              <div key={`${title}-${index + 1}`} className="flex justify-center">
                <Page
                  pageNumber={index + 1}
                  width={viewerWidth * zoom}
                  renderTextLayer
                  renderAnnotationLayer
                  loading={<div className="h-32 w-full animate-pulse rounded bg-slate-200" />}
                />
              </div>
            ))}
          </div>
        )}
      </Document>
    </div>
  )
}

const SubjectDetail = () => {
  const { id } = useParams()
  const subject = subjects[id]
  const [selectedTopic, setSelectedTopic] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (selectedTopic) {
      document.getElementById("reference-viewer")?.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedTopic])

  if (!subject) {
    return (
      <section className="px-6 py-16 text-center">
        <h1 className="text-3xl font-bold">Subject not found</h1>
        <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
          Back to home
        </Link>
      </section>
    )
  }

  const getFileUrl = (file) => `${import.meta.env.BASE_URL}${file}`

  return (
    <section className="w-full bg-slate-200 px-6 py-16 text-slate-900 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
          &lt;- Back to home
        </Link>

        <div className="mt-8 mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Subject notes
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {subject.name}
          </h1>
          <p className="mt-4 text-slate-600">{subject.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subject.topics.map((topic) => (
            <button
              key={topic.name}
              type="button"
              onClick={() => setSelectedTopic(topic)}
              className={`rounded-2xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg ${
                selectedTopic?.name === topic.name
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : "border-slate-200"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {topic.type}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{topic.name}</h2>
              <p className="mt-5 text-sm font-semibold text-blue-600">
                Open reference -&gt;
              </p>
            </button>
          ))}
        </div>

        {selectedTopic && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
              <h2 className="text-lg font-semibold">{selectedTopic.name}</h2>
              <a
                href={getFileUrl(selectedTopic.file)}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Open separately
              </a>
            </div>

            <div id="reference-viewer" className="flex min-h-[520px] items-center justify-center bg-slate-100 p-3 sm:p-6">
              {selectedTopic.type === "pdf" ? (
                <PdfViewer
                  file={getFileUrl(selectedTopic.file)}
                  title={selectedTopic.name}
                />
              ) : (
                <img
                  src={getFileUrl(selectedTopic.file)}
                  alt={selectedTopic.name}
                  className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-sm"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SubjectDetail
