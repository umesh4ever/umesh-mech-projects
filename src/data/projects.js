const projects = {
  cmm: {
    type: "cad",
    title: "Gantry CMM Model",
    objective:
      "The objective is to design a model of Gantry CMM the biggest type of CMMs.",
    purpose:
      "To get comfortable with complex modeling with multiple parts and set motion restrictions.",
    tool: ["I have used fusion 360."],
    model: "models/cmm.glb",
    modelCaption: "Gantry CMM CAD model",
    cover: "coverImages/cmmCover.png",
    videos: ["videos/GantryCMMParts.mp4", "videos/GantryCMMWorking.mp4"],
    videoCaptions: [
      "Gantry CMM model destructured",
      "Gantry working mechanism",
    ],
    whatItIs: [
      "CMM stands for a Coordinate Measuring Machine, which is a highly precise device used in manufacturing to measure the exact physical dimensions of an object by touching it with a probe or scanning it with a laser to ensure it matches engineering designs. Depending on your context.",

      "A gantry is an overhead, bridge-like framework designed to span across an open area to support, lift, or move heavy objects. It consists of two parallel side rails (or legs) connected by a horizontal crossbeam that travels along them, commonly seen in massive shipping port cranes, highway sign structures, and heavy manufacturing.",

      "When applied to a Coordinate Measuring Machine (CMM), this gantry structure creates a completely open workspace on the factory floor, allowing a precise measuring probe to travel smoothly across all three geometric axes to inspect enormous parts.",

      "A gantry CMM functions through six essential parts working together: a flush concrete or granite FOUNDATION built into the floor to support massive parts, and two elevated, parallel GUIDEWAYS that guide the machine's forward and backward movement. A heavy horizontal GANTRY BEAM spans across these tracks to move side-to-side, while a vertical CARRIAGE AND RAM extends downward from the beam to reach into deep components. At the very tip of this ram is the MEASURING PROBE (a touch sensor or laser scanner) that captures physical points, all regulated by a computerized CONTROLLER that translates the movement into precise 3D data.",
    ],
  },

  geneva: {
    type: "cad",
    title: "Geneva Mechanism",
    objective:
      "The objective is to create a Ganeva mechanism model and to demonstrate through a motion video.",
    purpose:
      "To learn fusion 360 cad modelling and motion study with relative contact",
    tool: "I have used fusion 360.",
    model: "models/geneva.glb",
    modelCaption: "Geneva CAD model",
    cover: "coverImages/genevaCover.png",
    videos: ["videos/GenevaParts.mp4", "videos/GenevaWorking.mp4"],
    videoCaptions: ["Geneva model destructured", "Geneva working mechanism"],
  },

  drs: {
    type: "simulation",
    title: "Drag Reduction System (DRS)",
    objective: "Not defined yet",

    tool: "I have used fusion 360.",
    model: "models/turbine.glb",
    cover: "coverImages/placeholder.png",
    videos: ["videos/turbine-parts.mp4", "videos/turbine-working.mp4"],
  },

  truck: {
    type: "simulation",
    title: "CFD Analysis of Truck Aerodynamics",
    objective:
      "objective is to perform a CFX analysis and measure the aerodynamics lift and drag forces.",
    model: "",
    tool: ["I have used Space Claim to design the truck body.","And Ansys CFX is used to perform the solution and the pre and post processing."],
    cover: "coverImages/truckCover.png",

    system : "a simple truck body is created in ansys spaceclaim.",
    preResultImages :[],
    resultImages: [
      "truck/dragForce.png",
      "truck/liftForce.png",
      "truck/pressureContour.png",
      "truck/streamline.png",
      "truck/velocityContour.png",
    ],
    resultImageCaptions: ["Drag Force","Lift Force","Pressure Contour","Streamline","Velocity Contour"],
    resultKeyword : ["Pressure Contour","Velocity contour","Streamlines"],
    resultConclusion: ["Pressure contours show the distribution of pressure throughout your fluid model. They use color codes to highlight areas where pressure builds up or drops. For example, red areas usually mean high pressure where fluid slams into a wall, while blue areas show low pressure where the fluid speeds up.","Velocity contours display how fast the fluid is moving at any given spot. The color gradient helps you easily spot high-speed zones, like fluid shooting through a narrow pipe. It also reveals dead zones, where the fluid slows down to a stop, or regions where the flow separates from a surface.","Streamlines draw the actual path that fluid particles travel through your design. They look like smooth, flowing lines that trace the direction of the flow. By looking at these lines, you can easily see if the fluid is moving smoothly or if it is spinning into turbulent whirlpools and vortices."],
  },
};

export default projects;
