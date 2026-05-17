import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  useEffect(() => {
    // This runs once when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const project = projects[id];

  if (!project) return <p>Project not found</p>;

  return (
    <section className="w-full py-16 px-6 ">
      <div className="max-w-6xl mx-auto space-y-10 lg:px-30">
        <h1 className="text-6xl text-center font-bold font-serif">
          {project.title}
        </h1>

        <div id="introInfo">
          <h2 className="text-2xl my-2 ">
            <span className="font-bold text-blue-800">Objective : </span>
            {project.objective}
          </h2>
          <h2 className="text-2xl my-2 ">
            <span className="font-bold text-blue-800">Why : </span>
            {project.purpose}
          </h2>
          <h2 className="text-2xl my-2 ">
            <span className="font-bold text-blue-800">Tools used : </span>
            {project.tool}
          </h2>
        </div>

        {/* 3D Model */}
        <div id="modelDiv">
          <h1 className="text-4xl text-center my-4 font-bold ">
            Model Demonstration
          </h1>
          <model-viewer
            src={`${import.meta.env.BASE_URL}${project.model}`}
            camera-controls
            auto-rotate
            className="w-auto lg:mx-0 h-96 rounded-xl bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 shadow-xl"
          ></model-viewer>
          <p className="text-center mt-2 text-2xl font-semibold text-blue-800">
            {project.modelCaption}
          </p>
        </div>

        {/* Videos */}
        <div id="VideoDiv">
          <h1 className="text-4xl text-center my-4 font-bold ">
            Video Demonstration
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {project.videos?.filter(Boolean).map((video, index) => (
              <div key={index}>
                <video controls className="w-full rounded-lg">
                  <source
                    src={`${import.meta.env.BASE_URL}${video}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <p className="text-center mt-2 text-2xl font-semibold text-blue-800">
                  {project.captions?.[index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6">
          <h1 className="text-4xl text-center my-4  overline" >More Project Details will be updates in coming time.</h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
