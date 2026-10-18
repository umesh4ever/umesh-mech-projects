import { useEffect } from "react";
import cover from "./cover.png";
import heatFluxVariation1 from "./heatFluxVariation1.png";
import heatFluxVariation2 from "./heatFluxVariation2.png";
import areaDiagram from "./areaDiagram.png";
import convectionDiagram from "./convectionDiagram.png";
import meshDiagram from "./meshDiagram.png";
import materialDiagram from "./materialDiagram.png";
import snCurve from "./snCurve.png";
import boundaryConditions from "./boundaryConditions.png";
import temperatureResult from "./temperatureResult.png";
import structuralDiagram from "./structuralDiagram.png";
import totalHeatFluxResult from "./totalHeatFluxResult.png";
import staticStructuralResult from "./staticStructuralResult.png";

export default function DiscBrakeCae() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-12">

        {/* Hero */}
        <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden border border-slate-200">
          <img
            src={cover}
            alt="Disc brake rotor CAD model"
            className="w-full h-64 object-cover sm:h-80"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider text-blue-100 mb-2">
              CAE Thermo-mechanical Analysis
            </span>
            <h1 className="text-3xl font-bold font-serif sm:text-5xl lg:text-6xl tracking-tight">
              Disc Brake Rotor — CAE Analysis
            </h1>
          </div>
        </div>

        {/* Objective */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">&#9733;</span> Objective
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Perform a <strong>transient thermal + static structural CAE
            analysis</strong> of a disc brake rotor during braking, evaluating
            the temperature rise and heat flux on the rotor, then study the
            structural effect of actual braking conditions.
          </p>
        </div>

        {/* Scenario Specs */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Vehicle Mass", value: "1500 kg" },
            { label: "Initial Speed", value: "100 km/h" },
            { label: "Final Speed", value: "0 m/s" },
            { label: "Braking Time", value: "4 s" },
            { label: "Front Bias", value: "70%" },
            { label: "Rear Bias", value: "30%" },
            { label: "Rotor Considered", value: "1 front rotor" },
            { label: "Material", value: "Gray cast iron" },
          ].map((spec, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-md transition"
            >
              <div className="text-blue-600 font-bold text-lg sm:text-xl">{spec.value}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-500 mt-1">
                {spec.label}
              </div>
            </div>
          ))}
        </div>

        {/* Calculations */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="text-blue-600">&#9655;</span> Input Parameters &amp; Calculations
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Kinetic Energy</p>
              <p className="text-lg font-bold text-slate-800">578,734 J</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                KE = ½mv² = ½(1500 kg)(27.78 m/s)², shared by all 4 rotors.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Heat to 1 Front Rotor</p>
              <p className="text-lg font-bold text-slate-800">202,557 J</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                ½ × 70% × 578,734 J over 4 s braking.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Power Generated</p>
              <p className="text-lg font-bold text-slate-800">50,639 W</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                202,557 J ÷ 4 s.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Total Area</p>
              <p className="text-lg font-bold text-slate-800">96,508 mm²</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                2π(R² − r²) = 2π(150² − 84.5²), both faces.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Heat Flux</p>
              <p className="text-lg font-bold text-slate-800">0.525 W/mm²</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                q = 50,639 W ÷ 96,508 mm².
              </p>
            </div>
          </div>
        </div>

        {/* Analysis Setup Images */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { src: areaDiagram, alt: "Heat transfer area diagram", caption: "Heat Transfer Area" },
            { src: convectionDiagram, alt: "Convection film coefficient", caption: "Convection (h)" },
            { src: meshDiagram, alt: "Rotor mesh", caption: "Meshing" },
            { src: materialDiagram, alt: "Material gray cast iron", caption: "Material" },
          ].map((img, i) => (
            <figure key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full h-40 object-cover" />
              <figcaption className="p-3 text-sm font-semibold text-slate-700 text-center">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* S-N Curve & Boundary Conditions */}
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <img src={snCurve} alt="S v/s N curve" className="w-full h-48 object-cover" />
            <figcaption className="p-3 text-sm font-semibold text-slate-700 text-center">S v/s N Curve</figcaption>
          </figure>
          <figure className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <img src={boundaryConditions} alt="Boundary conditions" className="w-full h-48 object-cover" />
            <figcaption className="p-3 text-sm font-semibold text-slate-700 text-center">Boundary Conditions</figcaption>
          </figure>
        </div>

        {/* Heat Flux Variation */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3 mt-8">
          <span className="text-blue-600">&#9655;</span> Heat Flux Variation During Braking
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { src: heatFluxVariation1, alt: "Heat flux variation 1", caption: "Heat Flux Variation 1" },
            { src: heatFluxVariation2, alt: "Heat flux variation 2", caption: "Heat Flux Variation 2" },
          ].map((img, i) => (
            <figure key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm font-semibold text-slate-700 text-center">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* Thermal Results */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3 mt-8">
          <span className="text-blue-600">&#9655;</span> Thermal Results
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <img src={temperatureResult} alt="Rotor temperature contour" className="w-full h-48 object-cover" />
            <figcaption className="p-3 text-sm font-semibold text-slate-700 text-center">Temperature Contour</figcaption>
          </figure>
          <figure className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <img src={totalHeatFluxResult} alt="Total heat flux contour" className="w-full h-48 object-cover" />
            <figcaption className="p-3 text-sm font-semibold text-slate-700 text-center">Total Heat Flux</figcaption>
          </figure>
        </div>

        {/* Structural Results */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3 mt-8">
          <span className="text-blue-600">&#9655;</span> Static Structural Results
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Further to know the effects of the actual condition of braking on the
          structure of the disc rotor, a static structural analysis is used.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { src: structuralDiagram, alt: "Structural diagram", caption: "Structural Diagram" },
            { src: staticStructuralResult, alt: "Static structural result", caption: "Static Structural Result" },
          ].map((img, i) => (
            <figure key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
              <figcaption className="p-3 text-sm font-semibold text-slate-700 text-center">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* Boundary Conditions Detail */}
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">&#9733;</span> Boundary Conditions Detail
          </h2>
          <ul className="space-y-2 text-slate-600 leading-relaxed list-disc pl-6">
            <li><strong>Material:</strong> Gray cast iron</li>
            <li><strong>Convection film coefficient (h):</strong> linearly decreasing, max 80 W/m².°C at full speed (forced convection) to min 10 W/m².°C at rest (natural convection)</li>
            <li><strong>Transient thermal:</strong> over 4 s braking, heat distributed/smeared over 360° on both rotor faces</li>
            <li><strong>Heat source:</strong> friction between rotor and brake pads</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100 p-6 sm:p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-blue-600">&#10004;</span> Conclusion through the Results
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3"><span className="font-semibold text-blue-800">Temperature Contour:</span> Shows how heat builds up on the disc rotor faces during the 4 s braking event, with the highest temperatures near the braking surface where the pads contact the rotor.</p>
          <p className="text-slate-600 leading-relaxed mb-3"><span className="font-semibold text-blue-800">Total Heat Flux:</span> Reveals the rate of heat transfer into the rotor, driven by friction between the rotor and brake pads and removed by convection to the surrounding air.</p>
          <p className="text-slate-600 leading-relaxed"><span className="font-semibold text-blue-800">Static Structural:</span> Evaluates the effects of actual braking conditions on the structure of the disc rotor (thermal stresses and deformation).</p>
        </div>

      </div>
    </section>
  );
}