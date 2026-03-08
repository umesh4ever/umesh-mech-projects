import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        <h2 className="text-lg font-semibold">
          Connect with me
        </h2>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>

        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Umesh
        </p>

      </div>

    </footer>
  )
}

export default Footer