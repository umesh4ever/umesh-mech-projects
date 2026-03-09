import { Link } from "react-router-dom"
import { useState } from "react"


const Navbar = () => {

  const [showResume, setShowResume] = useState(false)


  return (
    <nav className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-8">

      <h1 className="text-xl font-semibold">
        Umesh
      </h1>

      <div className="flex gap-8">

        <Link to="/">Home</Link>

        <a href="#projects">Projects</a>

        <a
          href={`${import.meta.env.BASE_URL}resume/CoreResume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300 transition"
        >
          Resume
        </a>

        <a href="#contact">Contact</a>

      </div>

    </nav>
  )
}

export default Navbar