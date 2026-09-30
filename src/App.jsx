import Navbar from "./components/Navbar"
import { createElement } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import SubjectDetail from "./pages/SubjectDetail"
import projects from "./projects"

const App = () => {
  
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {projects.map(({ id, component: ProjectComponent }) => (
            <Route
              key={id}
              path={`/project/${id}`}
              element={createElement(ProjectComponent)}
            />
          ))}
          <Route path="/subject/:id" element={<SubjectDetail />} />

        </Routes>
      </div>

      <Contact />
      <Footer/> 

    </div>
  )
}

export default App