import Image from "next/image";

export default function MySelf() {
  const skills = [
    { name: "Angular", level: 85 },
    { name: "React/Next.js", level: 80 },
    { name: "Vue.js/Nuxt.js", level: 60 },
    { name: "TypeScript/JavaScript", level: 90 },
    { name: "C# .NET / Node.js (Basic)", level: 40 },
    { name: "HTML , CSS", level: 90 },
    { name: "AI Tools: Azure Document Intelligence ", level: 60 },
    { name: "Version Control , Git", level: 90 },
    { name: "SQL (Basic)", level: 50 },
  ];

  const interests = [
    "Web Development",
    "Mobile Apps",
    "AI & Machine Learning",
    "Game Development",
    "Blog Writing",
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate front-end developer with a love for creating innovative
              solutions and building meaningful digital experiences that make a
              difference.
            </p>
          </div>
        </section>

        {/* Personal Info */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Who I Am
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Hello! I’m a passionate software developer with over 2 years
                  of experience in building web applications and digital
                  solutions. What began as a simple curiosity for technology has
                  grown into a deep commitment to creating meaningful products
                  that solve real-world problems and enhance user experiences.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Quick Facts
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">
                    Full Name:
                  </span>
                  <span className="text-gray-800">Areeya Lakonpol</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">
                    Nick Name:
                  </span>
                  <span className="text-gray-800">Dow</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">Age:</span>
                  <span className="text-gray-800">23</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">
                    Location:
                  </span>
                  <span className="text-gray-800">Bangkok, Thailand</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">
                    Experience:
                  </span>
                  <span className="text-gray-800">2 Years</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">Focus:</span>
                  <span className="text-gray-800">Front-End Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">
                    Languages:
                  </span>
                  <span className="text-gray-800">Thai, English</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-600 font-medium">
                    Status:
                  </span>
                  <span className="text-green-600 font-medium">
                    Available for hire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Technical Skills
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Interests 
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                I believe in delivering high-quality code and solutions that
                stand the test of time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Great products are built by great teams. I value communication
                and teamwork.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600">
                Technology evolves rapidly. I stay updated with the latest
                trends and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I am always interested in new opportunities and exciting projects.
            Feel free to reach out if you would like to collaborate or just have
            a chat about technology!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center"
            >
              Contact Me
            </a>
            <a
              href="/ALY-RESUME.pdf"
              download
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
