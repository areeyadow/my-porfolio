export default function Home() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to ARY Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionate developer creating innovative solutions and building meaningful experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/myself"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              About Me
            </a>
            <a
              href="/experience"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Experience
            </a>
            <a
              href="/experience"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
                My Education
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
            Contact
            </a>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Portfolio Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-gray-600">
                Personal introduction, skills, and passion for development
              </p>
              <a href="/myself" className="text-green-600 hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">
                Professional work experience and projects I have contributed to
              </p>
              <a href="/experience" className="text-blue-600 hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Academic background and continuous learning journey
              </p>
              <a href="/education" className="text-blue-600 hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">
                Get in touch with me for opportunities and collaborations
              </p>
              <a href="/contact" className="text-blue-600 hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
