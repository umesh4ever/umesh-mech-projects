const projects = {
  cmm: {
    type : "cad",
    title: "Gantry CMM Model",
    objective: "The objective is to design a model of Gantry CMM the biggest type of CMMs.",
    purpose:"To get comfortable with complex modeling with multiple parts and set motion restrictions.",
    tool:"I have used fusion 360.",
    model: "models/cmm.glb",
    modelCaption: "Gantry CMM CAD model",
    cover: "coverImages/cmmCover.png",
    videos: ["videos/GantryCMMParts.mp4", "videos/GantryCMMWorking.mp4"],
    captions: ["Gantry CMM model destructured","Gantry working mechanism"],
   
  },












  geneva: {
    type : "cad",
    title: "Geneva Mechanism",
    objective: "The objective is to create a Ganeva mechanism model and to demonstrate through a motion video.",
    purpose : "To learn fusion 360 cad modelling and motion study with relative contact",
    tool:"I have used fusion 360.",
    model: "models/geneva.glb",
    modelCaption: "Geneva CAD model",
    cover: "coverImages/genevaCover.png",
    videos: ["videos/GenevaParts.mp4", "videos/GenevaWorking.mp4"],
    captions: ["Geneva model destructured","Geneva working mechanism"],


    
  },











  drs: {
    type : "simulation",
    title: "Drag Reduction System (DRS)",
    objective: "Not defined yet",
    model: "models/turbine.glb",
    cover: "coverImages/placeholder.png",
    videos: ["videos/turbine-parts.mp4", "videos/turbine-working.mp4"],
    
  },














  truck: {
    type : "simulation",
    title: "CFD Analysis of Truck Aerodynamics",
    objective: "objective is to perform a CFX analysis and measure the aerodynamics lift and drag forces.",
    model: "",
    cover: "coverImages/truckCover.png",
    images: ["videos/GenevaParts.mp4", "videos/GenevaWorking.mp4"],
   
  },
};

export default projects;