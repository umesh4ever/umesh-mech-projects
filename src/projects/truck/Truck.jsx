import { useEffect } from "react";
import dragForce from "./dragForce.png";
import liftForce from "./liftForce.png";
import pressureContour from "./pressureContour.png";
import streamline from "./streamline.png";
import velocityContour from "./velocityContour.png";

export default function Truck() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-slate-200 px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <h1 className="text-center text-4xl font-bold font-serif lg:text-6xl">CFD Analysis of Truck Aerodynamics</h1>

        <div className="space-y-4 text-xl lg:text-2xl">
          <p><span className="font-bold text-blue-800">Objective: </span>The objective is to perform a CFX analysis and measure the aerodynamic lift and drag forces.</p>
          <p><span className="font-bold text-blue-800">System: </span>A simple truck body is created in Ansys SpaceClaim.</p>
          <p><span className="font-bold text-blue-800">Tools used: </span>SpaceClaim was used to design the truck body. Ansys CFX was used for the solution and pre- and post-processing.</p>
        </div>

        <div>
          <h2 className="my-4 text-center text-4xl font-bold">Aerodynamic Results</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              [dragForce, "Drag Force"],
              [liftForce, "Lift Force"],
              [pressureContour, "Pressure Contour"],
              [streamline, "Streamline"],
              [velocityContour, "Velocity Contour"],
            ].map(([image, caption]) => (
              <figure key={caption}>
                <img src={image} alt={caption} className="w-full rounded-lg object-cover shadow-lg" />
                <figcaption className="mt-2 text-center text-xl font-semibold text-blue-800">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 lg:text-4xl">Conclusion through the Results</h2>
          <p className="text-xl leading-relaxed lg:text-2xl"><span className="font-bold">Pressure Contour: </span>Pressure contours show the distribution of pressure throughout the fluid model. Red areas usually mean high pressure where fluid strikes a wall, while blue areas show low pressure where the fluid speeds up.</p>
          <p className="text-xl leading-relaxed lg:text-2xl"><span className="font-bold">Velocity Contour: </span>Velocity contours display how fast the fluid is moving at any given spot. They reveal high-speed zones, dead zones, and regions where flow separates from a surface.</p>
          <p className="text-xl leading-relaxed lg:text-2xl"><span className="font-bold">Streamlines: </span>Streamlines trace the path fluid particles travel through the design and reveal whether the flow is smooth or forming turbulent vortices.</p>
        </div>
      </div>
    </section>
  );
}