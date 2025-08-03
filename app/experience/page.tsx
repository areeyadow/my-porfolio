export default function Experience() {
  type Experience = {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
  };

  const experiences: Experience[] = [
    {
      title: "Front-end Developer",
      company: "Gofive Co., Ltd.",
      period: "Mar 2024 - Present",
      description: `Collaborated closely with back-end developers to define API contracts and integrated RESTful APIs for full CRUD operations.
Developed features using Angular, TypeScript, SQL, C#, HTML, CSS, Next.js, MUI, and Jest.
Built responsive UI layouts to deliver seamless user experiences across devices and screen sizes.
Optimized web performance through virtual scrolling, lazy loading, and efficient rendering techniques.
Contributed to a Microfrontend architecture, enabling modular development and independent deployment of UI modules.
Applied Clean Architecture principles to ensure separation of concerns, improve code maintainability, and support scalability.
Worked in a cross-functional team following Agile methodology, participated in sprint planning, daily stand-ups, code reviews, and iterative development cycles.`,
      skills: [
        "Angular",
        "TypeScript",
        "Next.js",
        "MUI",
        "SQL",
        "C#",
        "HTML",
        "CSS",
        "Jest",
      ],
    },
    {
      title: "Internship - Frontend Developer",
      company: "T.C.C. Technology Co., Ltd",
      period: "June 2023 - Nov 2023",
      description: `Worked alongside back-end engineers to coordinate data flow and seamlessly consume RESTful APIs for data-driven UI components.
Implemented core front-end functionality using Vue.js and Nuxt.js, focusing on modular and maintainable code.
Participated in Agile team processes, including sprint planning, daily stand-up meetings, peer code reviews, and continuous delivery cycles.`,
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Nuxt.js"],
    },
    {
      title: "Internship - Web Developer",
      company: " ODT, Khon Kaen University",
      period: "Apr 2023 - June 2023",
      description:
        "Designed and developed websites using WordPress, integrating custom HTML and CSS to enhance layout and styling.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Experience</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          My professional journey and the projects I've worked on throughout my
          career.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Sprint Commitments Delivered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <p className="text-gray-700">Years of Practical Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
              <p className="text-gray-700">Technologies Proficient</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
