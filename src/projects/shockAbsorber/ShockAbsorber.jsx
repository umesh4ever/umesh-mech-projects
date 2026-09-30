import { useEffect } from "react";
import video from "./shockAbsorber.mp4";
import explodedImage from "./exploded.png";
const objFile = new URL("./objfile.obj", import.meta.url).href;

export default function ShockAbsorber() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-slate-200 px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <h1 className="text-center text-4xl font-bold font-serif lg:text-6xl">Coilover Shock Absorber</h1>

        <div className="space-y-4 text-xl lg:text-2xl">
          <p><span className="font-bold text-blue-800">Objective: </span>To create a CAD model of a coilover shock absorber using Siemens NX and understand parametric sketching and component assembly.</p>
          <p><span className="font-bold text-blue-800">Purpose: </span>To get comfortable with NX constraints and assembly.</p>
          <p><span className="font-bold text-blue-800">Tools used: </span>Siemens NX was used to design the components and assemble them in a separate assembly file.</p>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">Exploded Assembly</h2>
          <figure className="mx-auto max-w-4xl">
            <img src={explodedImage} alt="Exploded view" className="w-full rounded-lg shadow-lg" />
            <figcaption className="mt-2 text-center text-xl font-semibold text-blue-800">Exploded view</figcaption>
          </figure>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">Assembly Video</h2>
          <video controls className="mx-auto block w-full max-w-4xl rounded-lg">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <a href={objFile} download className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Download OBJ File
        </a>
      </div>
    </section>
  );
}