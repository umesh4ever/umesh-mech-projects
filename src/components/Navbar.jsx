import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-8">

      <h1 className="text-xl font-semibold">
        Umesh
      </h1>

      <div className="flex gap-8">

        <Link to="/">Home</Link>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </div>

    </nav>
  )
}

export default Navbar