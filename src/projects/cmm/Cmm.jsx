import { useEffect } from "react";
import partsVideo from "./GantryCMMParts.mp4";
import workingVideo from "./GantryCMMWorking.mp4";

const model = new URL("./cmm.glb", import.meta.url).href;

export default function Cmm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-slate-200 px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <h1 className="text-center text-4xl font-bold font-serif lg:text-6xl">
          Gantry CMM Model
        </h1>

        <div className="space-y-4 text-xl lg:text-2xl">
          <p><span className="font-bold text-blue-800">Objective: </span>The objective is to design a model of Gantry CMM, the biggest type of CMMs.</p>
          <p><span className="font-bold text-blue-800">Purpose: </span>To get comfortable with complex modeling with multiple parts and set motion restrictions.</p>
          <p><span className="font-bold text-blue-800">Tools used: </span>Fusion 360.</p>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">Model Demonstration</h2>
          <model-viewer
            src={model}
            camera-controls
            auto-rotate
            className="mx-auto h-96 w-full max-w-4xl rounded-xl bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 shadow-xl"
          ></model-viewer>
          <p className="mt-2 text-center text-xl font-semibold text-blue-800">Gantry CMM CAD model</p>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold text-blue-800">What is a Gantry CMM?</h2>
          <p className="mb-4 text-xl leading-relaxed lg:text-2xl">CMM stands for a Coordinate Measuring Machine, which is a highly precise device used in manufacturing to measure the exact physical dimensions of an object by touching it with a probe or scanning it with a laser to ensure it matches engineering designs.</p>
          <p className="mb-4 text-xl leading-relaxed lg:text-2xl">A gantry is an overhead, bridge-like framework designed to span across an open area to support, lift, or move heavy objects. It consists of two parallel side rails connected by a horizontal crossbeam that travels along them.</p>
          <p className="mb-4 text-xl leading-relaxed lg:text-2xl">When applied to a Coordinate Measuring Machine, this gantry structure creates a completely open workspace on the factory floor, allowing a precise measuring probe to travel smoothly across all three geometric axes to inspect enormous parts.</p>
          <p className="mb-4 text-xl leading-relaxed lg:text-2xl">A gantry CMM functions through six essential parts working together: a foundation, guideways, gantry beam, carriage and ram, measuring probe, and computerized controller.</p>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">Video Demonstration</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              [partsVideo, "Gantry CMM model destructured"],
              [workingVideo, "Gantry working mechanism"],
            ].map(([video, caption]) => (
              <div key={caption}>
                <video controls className="w-full rounded-lg">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="mt-2 text-center text-xl font-semibold text-blue-800">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}