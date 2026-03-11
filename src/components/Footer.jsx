import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        <h2 className="text-lg font-semibold">
          Connect with me
        </h2>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://www.linkedin.com/in/umesh-b7066627b/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/umesh26710051?t=osNStRsMP5N1hCn3TWjRVg&s=09"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/umesh4ever"
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