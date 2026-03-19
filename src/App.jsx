import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

const App = () => {
  
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>

      <Contact />
      <Footer/> 

    </div>
  )
}

export default App