const subjects = {
  mechanics: {
    name: "Engineering Mechanics",
    description: "Forces, moments, equilibrium, and free-body diagrams.",
    topics: [
      {
        name: "Unit 1",
        type: "pdf",
        file: "notes/mechanics/1st.pdf",
      },
      {
        name: "Buckling",
        type: "pdf",
        file: "notes/mechanics/buckling.pdf",
      },
      {
        name: "Beam , Loads and Deflection",
        type: "pdf",
        file: "notes/mechanics/beams_loads.pdf",
      },
    ],
  },
  fluids: {
    name: "Fluids Mechanics",
    description: "Viscous, Forces, moments, equilibrium, and free-body diagrams.",
    topics: [
      {
        name: "Fluids Unit 2",
        type: "pdf",
        file: "notes/fluids/unit_2.pdf",
      },
      {
        name: "Fluids Unit 3",
        type: "pdf",
        file: "notes/fluids/unit_3.pdf",
      },
      
    ],
  },

  thermal: {
    name: "Thermal Engineering",
    description: "Properties, laws, cycles, and energy systems.",
    topics: [
      {
        name: "Properties of pure substance",
        type: "pdf",
        file: "notes/thermal/pureSubs.pdf",
      },
      {
        name: "Engines Terminologies",
        type: "pdf",
        file: "notes/thermal/engines.pdf",
      },
    ],
  },

  manufacturingProcesses: {
    name: "Manufacturing Processes",
    description: "Design principles, materials, and machine elements.",
    topics: [
      {
        name: "Cutting",
        type: "pdf",
        file: "notes/mp/cutting.pdf",
      },
    ],
  },
  msqc: {
    name: "Metrology and SQC",
    description: "Design principles, materials, and machine elements.",
    topics: [
      {
        name: "Statistical Quality Control",
        type: "pdf",
        file: "notes/msqc/SQC.pdf",
      },
    ],
  },

  dev: {
    name: "Dev Related",
    description: "React JS, Javascript, Github",
    topics: [
      {
        name: "Javascript",
        type: "pdf",
        file: "notes/dev/js.pdf",
      },
      {
        name: "React JS",
        type: "pdf",
        file: "notes/dev/react.pdf",
      },
      {
        name: "Github Deployment Guide",
        type: "pdf",
        file: "notes/dev/github_deployment.pdf",
      },
      {
        name: "Github ReadMe guide",
        type: "pdf",
        file: "notes/dev/github_readme.pdf",
      },
    ],
  },
};

export default subjects;
