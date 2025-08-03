export default function Certificate() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Demonstrated ability to design and deploy scalable, highly available systems on AWS.",
      image: "/api/placeholder/300/200",
      credentialUrl: "#",
      skills: ["AWS", "Cloud Architecture", "System Design"]
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced certification covering React, Redux, and modern frontend development practices.",
      image: "/api/placeholder/300/200",
      credentialUrl: "#",
      skills: ["React", "Redux", "JavaScript", "Frontend Development"]
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      description: "Certification in developing applications and services on Google Cloud Platform.",
      image: "/api/placeholder/300/200",
      credentialUrl: "#",
      skills: ["Google Cloud", "Cloud Development", "Kubernetes"]
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      description: "Hands-on certification for Kubernetes administration and orchestration.",
      image: "/api/placeholder/300/200",
      credentialUrl: "#",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"]
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2021",
      description: "Foundational knowledge of cloud services and how they are provided with Microsoft Azure.",
      image: "/api/placeholder/300/200",
      credentialUrl: "#",
      skills: ["Azure", "Cloud Computing", "Microsoft Cloud"]
    },
    {
      title: "MongoDB Developer Associate",
      issuer: "MongoDB",
      date: "2021",
      description: "Certification demonstrating proficiency in MongoDB database development and administration.",
      image: "/api/placeholder/300/200",
      credentialUrl: "#",
      skills: ["MongoDB", "NoSQL", "Database Design"]
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Certificates</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Professional certifications and achievements that validate my skills and expertise in various technologies.
        </p>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="text-lg font-semibold">{cert.issuer}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-700 text-sm mb-4">{cert.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={cert.credentialUrl}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Certification Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <p className="text-gray-700">Total Certificates</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-gray-700">Cloud Platforms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2023</div>
              <p className="text-gray-700">Latest Certification</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-700">Skills Validated</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Learning</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            Currently pursuing additional certifications in AI/ML and advanced cloud architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View All Credentials
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
