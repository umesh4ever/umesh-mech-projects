import { useEffect } from "react";

export default function Drs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-slate-200 px-6 py-16">
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        <h1 className="text-4xl font-bold font-serif lg:text-6xl">Drag Reduction System (DRS)</h1>
        <div className="rounded-xl bg-slate-800 p-10 text-white shadow-xl">
          <h2 className="text-3xl font-bold">Work In Progress</h2>
          <p className="mt-4 text-xl">90% complete</p>
          <div className="mx-auto mt-4 h-3 max-w-xl rounded-full bg-white/30">
            <div className="h-3 rounded-full bg-yellow-400" style={{ width: "90%" }} />
          </div>
          <p className="mt-8 text-xl">The project is being developed as a Fusion 360 model and simulation study.</p>
          <p className="mt-4 text-xl"><span className="font-bold">Tool: </span>Fusion 360.</p>
        </div>
      </div>
    </section>
  );
}