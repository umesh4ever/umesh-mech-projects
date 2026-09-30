import { useEffect } from "react";
import partsVideo from "./GenevaParts.mp4";
import workingVideo from "./GenevaWorking.mp4";

const model = new URL("./geneva.glb", import.meta.url).href;

export default function Geneva() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-slate-200 px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <h1 className="text-center text-4xl font-bold font-serif lg:text-6xl">Geneva Mechanism</h1>

        <div className="space-y-4 text-xl lg:text-2xl">
          <p><span className="font-bold text-blue-800">Objective: </span>The objective is to create a Geneva mechanism model and demonstrate it through a motion video.</p>
          <p><span className="font-bold text-blue-800">Purpose: </span>To learn Fusion 360 CAD modeling and motion study with relative contact.</p>
          <p><span className="font-bold text-blue-800">Tools used: </span>Fusion 360.</p>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">Geneva Mechanism Model</h2>
          <model-viewer
            src={model}
            camera-controls
            auto-rotate
            className="mx-auto h-96 w-full max-w-4xl rounded-xl bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 shadow-xl"
          ></model-viewer>
          <p className="mt-2 text-center text-xl font-semibold text-blue-800">Geneva CAD model</p>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">Motion Study</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              [partsVideo, "Geneva model destructured"],
              [workingVideo, "Geneva working mechanism"],
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