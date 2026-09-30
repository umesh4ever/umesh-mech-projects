import { useEffect } from "react";
import cover from "./discBrakeCover.png";
import assemblyVideo from "./discBrake.mp4";

export default function DiscBrake() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-slate-200 px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <h1 className="text-center text-4xl font-bold font-serif lg:text-6xl">
          Floating Disc Brake
        </h1>

        <div className="space-y-4 text-xl lg:text-2xl">
          <p>
            <span className="font-bold text-blue-800">Objective: </span>To
            create the CAD model of a floating disc brake assembly using Siemens
            NX and understand parametric sketching and component assembly.
          </p>
          <p>
            <span className="font-bold text-blue-800">Purpose: </span>To create
            a floating disc brake assembly using Siemens NX while keeping the
            parts as close to the real components as possible.
          </p>
          <p>
            <span className="font-bold text-blue-800">Tools used: </span>Siemens
            NX was used to design the components and assemble them in a separate
            assembly file.
          </p>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">
            Floating Disc Brake Assembly
          </h2>
          <figure className="mx-auto max-w-4xl">
            <img
              src={cover}
              alt="Floating disc brake assembly"
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="mt-2 text-center text-xl font-semibold text-blue-800">
              Exploded View
            </figcaption>
          </figure>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">
            Assembly Video
          </h2>
          <video controls className="mx-auto block w-full max-w-4xl rounded-lg">
            <source src={assemblyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
