function Projects() {
  return (
    <section className="flex flex-col items-center mb-20 text-left">
      <div className="max-w-6xl w-full px-6">
        <h1 className="text-white text-5xl font-semibold mb-10 text-center"> Projects </h1>
        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <a href="https://github.com/liammn246/CharacterSwipe" target="_blank">
          {/* Project 1 */}
          <div className="bg-[#1c1c1f] rounded-xl shadow-lg overflow-hidden border border-[#2e2e33] hover:scale-[1.01] transition-transform duration-300">
            <img src="/images/CharacterSwipe.png" alt="CharacterSwipe" className="w-full h-56 object-contain bg-[#1c1c1f] p-1" />
            <div className="p-6">
              <h2 className="text-white text-xl font-bold mb-1">CharacterSwipe</h2>
              <p className="text-gray-400 text-sm mb-3">Full Stack</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Developed CharacterSwipe, a mobile game inspired by 2048, with dynamic animations and engaging backgrounds. 
                Worked with a small team of students through the game development cycle, including design, coding, testing, and release.
                Gained hands-on experience in mobile game production and user engagement.
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-gray-300 bg-[#2e2e33] px-2 py-1 rounded-md">Swift</span>
                <span className="text-xs text-gray-300 bg-[#2e2e33] px-2 py-1 rounded-md">GameplayKit</span>
                <span className="text-xs text-gray-300 bg-[#2e2e33] px-2 py-1 rounded-md">SwiftUI</span>
              </div>
            </div>
          </div>
          </a>
          <a href="https://github.com/liammn246/Fullstack-Blog-App" target="_blank">
          {/* Project 2 */}
          <div className="bg-[#1c1c1f] rounded-xl shadow-lg overflow-hidden border border-[#2e2e33] hover:scale-[1.01] transition-transform duration-300">
            <img src="/images/blog_home.png" alt="BlogApp" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-white text-xl font-bold mb-1">Blog App</h2>
              <p className="text-gray-400 text-sm mb-3">Full Stack</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                A full-stack blog website using React, FastAPI, SQLAlchemy. Implemented features such as user authentication, CRUD posts, 
                managing a database, and responsive design. Gained hands-on experience in 
                web development, API integration, and deployment.
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-gray-300 bg-[#2e2e33] px-2 py-1 rounded-md">Django</span>
                <span className="text-xs text-gray-300 bg-[#2e2e33] px-2 py-1 rounded-md">React</span>
                <span className="text-xs text-gray-300 bg-[#2e2e33] px-2 py-1 rounded-md">SQLite</span>
              </div>
            </div>
          </div>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Projects
