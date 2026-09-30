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

const LoadingSpinner = ({ label = "Loading preview..." }) => (
  <div className="flex flex-col items-center justify-center gap-3" role="status" aria-live="polite">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/60 border-t-blue-600" />
    <span className="text-sm font-medium text-slate-700">{label}</span>
  </div>
)

const PdfViewer = ({ file, title, onLoadingChange }) => {
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
    onLoadingChange(true)
  }

  const handlePageRenderSuccess = (pageNumber) => {
    if (pageNumber === 1) {
      onLoadingChange(false)
    }
  }

  if (error) {
    return (
      <p className="rounded-lg bg-red-50 p-6 text-center text-red-700">
        This PDF could not be displayed. Use &quot;Open separately&quot; above to view it.
      </p>
    )
  }

  return (
    <div ref={viewerRef} className="relative min-h-[480px] w-full overflow-x-auto">
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
        onLoadError={() => {
          setError(true)
          onLoadingChange(false)
        }}
        loading={null}
        error={<p className="p-8 text-center text-red-700">Unable to load this PDF.</p>}
      >
        {pageCount && viewerWidth > 0 && (
          <>
            <div className="space-y-5">
            {Array.from({ length: pageCount }, (_, index) => (
              <div key={`${title}-${index + 1}`} className="flex justify-center">
                <Page
                  pageNumber={index + 1}
                  width={viewerWidth * zoom}
                  renderTextLayer
                  renderAnnotationLayer
                  onRenderSuccess={() => handlePageRenderSuccess(index + 1)}
                  loading={<div className="h-32 w-full animate-pulse rounded bg-slate-200" />}
                />
              </div>
            ))}
            </div>
          </>
        )}
      </Document>
    </div>
  )
}

const ImageViewer = ({ file, title, onLoadingChange }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative flex min-h-[480px] w-full items-center justify-center">
      <img
        src={file}
        alt={title}
        onLoad={() => {
          setLoaded(true)
          onLoadingChange(false)
        }}
        className={`max-h-[70vh] max-w-full rounded-lg object-contain shadow-sm transition-opacity duration-300 ${loaded ? "opacity-100" : "h-0 opacity-0"}`}
      />
    </div>
  )
}

const SubjectDetail = () => {
  const { id } = useParams()
  const subject = subjects[id]
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (selectedTopic) {
      const preview = document.getElementById("reference-viewer")

      if (!preview) return undefined

      const startPosition = window.scrollY
      const targetPosition = preview.getBoundingClientRect().top + window.scrollY - 72
      const distance = targetPosition - startPosition
      const duration = 850
      let animationFrame
      const startTime = performance.now()

      const animateScroll = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2

        window.scrollTo(0, startPosition + distance * easedProgress)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateScroll)
        }
      }

      animationFrame = requestAnimationFrame(animateScroll)

      return () => cancelAnimationFrame(animationFrame)
    }

    return undefined
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

  const selectTopic = (topic) => {
    setSelectedTopic(topic)
    setIsPreviewLoading(true)
  }

  return (
    <section className="relative w-full bg-slate-200 px-6 py-16 text-slate-900 sm:px-10">
      {isPreviewLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-200/75 p-6 backdrop-blur-[2px]">
          <LoadingSpinner label="Loading preview..." />
        </div>
      )}

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
              onClick={() => selectTopic(topic)}
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
                  key={selectedTopic.file}
                  file={getFileUrl(selectedTopic.file)}
                  title={selectedTopic.name}
                  onLoadingChange={setIsPreviewLoading}
                />
              ) : (
                <ImageViewer
                  key={selectedTopic.file}
                  file={getFileUrl(selectedTopic.file)}
                  title={selectedTopic.name}
                  onLoadingChange={setIsPreviewLoading}
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
