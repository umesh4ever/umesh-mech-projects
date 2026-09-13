import Header from "../components/Header"
import ProjectSection from "../sections/ProjectSection"
import Contact from "../sections/Contact"
import About from "../sections/About"
import DiscBrake from "../components/projects_jsx/DiscBrake"
import Notes from "../sections/Notes"

const Home = () => {
  return (
    <>
      <Header />
      <About/>
     
      <ProjectSection />
      <Notes/>
      
    </>
  )
}

export default Home