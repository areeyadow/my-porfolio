export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "College of Computing, Khon Kaen University",
      period: "2019 - 2023",
      description: "Specialized in software development, algorithms, and data structures. Graduated with Second Class Honors (เกียรตินิยมอันดับ 2).",
      courses: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering","Machine Learning","Object-Oriented Programming"]
    },
    {
      degree: "High School",
      institution: "Satrirachinuthit School, Udon Thani",
      period: "2012 - 2019",
      description: "Focused on mathematics and sciences with excellent academic performance.",
      courses: ["Mathematics", "Physics", "Computer Science", "English", "Chemistry"]
    }
  ]

  const onlineCourses = [
    {
      title: "Write your first C# code",
      platform: "Microsoft Learn",
      year: "2025",
      description: "In-depth course covering C# fundamentals, object-oriented programming, and basic web development."
    },
    {
      title: "Get started with AI-powered information extraction in Azure",
      platform: "Microsoft Learn",
      year: "2025",
      description: "Learn to use Azure Document Intelligence and AI services for automated data extraction and processing from documents."
    },
     {
      title: "Azure AI: Zero to Hero",
      platform: "born to dev",
      year: "2025",
      description: "Foundational course covering Azure AI services, including machine learning, natural language processing, and computer vision."
    }
    ,
    {
      title: "Get started with TypeScript",
      platform: "born to dev",
      year: "2024",
      description: "Foundational course covering TypeScript basics, type system, and getting started with typed JavaScript development."
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Education</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          My academic background and continuous learning journey in technology and software development.
        </p>

        {/* Formal Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Formal Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-blue-600">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{edu.period}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{edu.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Learning */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Online Learning & Professional Development</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-blue-600 mb-2">{course.platform}</p>
                <p className="text-gray-500 text-sm mb-3">{course.year}</p>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  )
}
