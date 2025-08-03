export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Me</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          I would love to hear from you! Feel free to reach out for any opportunities, 
          collaborations, or just to have a chat about technology.
        </p>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">areyalak2001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">061 135 1612</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">Bangkok, Thailand</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">💼</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">LinkedIn</h3>
                  <p className="text-gray-600">https://www.linkedin.com/in/areeya-lakonpol-671836291/</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xl">🐙</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">GitHub</h3>
                  <p className="text-gray-600">https://github.com/areeyadow</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let&apos;s Connect!</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just chatting about the latest in web development and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:areeyalakonpol@gmail.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Email
            </a>
            <a
              href="/ALY-RESUME.pdf"
              download
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
