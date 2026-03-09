const projects = {
  cmm: {
    title: "CMM Machine Model",
    model: "models/cmm.glb",
    cover: "coverImages/cmmCover.png",
    videos: ["videos/GantryCMMParts.mp4", "videos/GantryCMMWorking.mp4"],
    overview:
      "Conceptual Coordinate Measuring Machine model demonstrating the structure and working of a gantry-type inspection system.",
    structure:
      "The model includes a base platform, vertical columns, and a horizontal beam carrying the probe assembly.",
    working:
      "The probe moves along the machine axes to measure coordinates of points on the object placed on the base.",
    learning:
      "This project helped me practice CAD assembly design and visualize mechanical systems using interactive 3D models."
  },

  geneva: {
  title: "Geneva Mechanism",
  model: "models/geneva.glb",
  cover: "coverImages/genevaCover.png",
  videos: ["videos/GenevaParts.mp4", "videos/GenevaWorking.mp4"],
  overview:
    "A CAD model of a Geneva mechanism used to convert continuous rotational motion into intermittent motion.",
  structure:
    "The system consists of a rotating drive wheel with a pin and a driven wheel containing radial slots that receive the pin.",
  working:
    "As the drive wheel rotates, the pin engages a slot in the driven wheel and rotates it by a fixed angle before disengaging, producing stepwise motion.",
  learning:
    "Through this project I explored motion transfer mechanisms, kinematic constraints, and CAD assembly design for mechanical systems."
},

  drs: {
    title: "Drag Reduction System (DRS)",
    model: "models/turbine.glb",
    cover: "coverImages/cmmCover.png",
    videos: ["videos/turbine-parts.mp4", "videos/turbine-working.mp4"],
    overview: "A CAD model of a Drag Reduction System used in racing cars to reduce aerodynamic drag.", 
    structure: "The system consists of a rear wing with a movable flap connected through hinge and linkage mechanisms.", 
    working: "When activated, the flap rotates to reduce drag and increase straight-line speed of the vehicle.", 
    learning: "This project helped me understand aerodynamic devices and mechanical linkage systems used in motorsports."
  }
}

export default projects