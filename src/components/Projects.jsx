import React from 'react'
import Cards from './ProjectCard'
import ProjectDetails from '../pages/ProjectDetails'

const Projects = () => {
  return (
  <section className="w-full py-10 px-10 bg-white">

    <div className="max-w-6xl mx-auto">

      <h2 className="text-3xl font-semibold mb-10">
        Projects
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        
        {/* <Cards/> */}
        <ProjectDetails/>

      </div>

    </div>

  </section>
)
}

export default Projects
