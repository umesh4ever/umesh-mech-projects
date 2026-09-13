import { Link } from "react-router-dom";
import subjects from "../data/subjects";

function Notes() {
  return (
    <section
      id="notes"
      className="scroll-mt-16 w-full bg-blue-50 px-6 py-16 text-slate-900 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Study library
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Engineering Notes
          </h2>
          <p className="mt-4 text-slate-600">
            Choose a subject to open its notes and reference files.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(subjects).map(([id, subject]) => (
            <Link
              key={id}
              to={`/subject/${id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
            >
              <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                {subject.name.charAt(0)}
              </span>
              <h3 className="text-xl font-semibold">{subject.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                {subject.description}
              </p>
              <span className="mt-5 block text-sm font-semibold text-blue-600">
                {subject.topics.length} topics -&gt;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Notes;
