import { FaEnvelope, FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-gray-100"
    >

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-12">
          Feel free to reach out if you want to discuss engineering, CAD projects, or collaboration.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Email */}
          <a
            href="mailto:umesh@email.com"
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <FaEnvelope className="text-3xl text-blue-500" />

            <div className="text-left">
              <h3 className="text-lg font-semibold">
                Email
              </h3>
              <p className="text-gray-600">
                umesh26710051@gmail.com
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9289253686"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <FaWhatsapp className="text-3xl text-green-500" />

            <div className="text-left">
              <h3 className="text-lg font-semibold">
                WhatsApp
              </h3>
              <p className="text-gray-600">
                +91 9289253686
              </p>
            </div>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact