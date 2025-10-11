function Projects() {
  return (
    <section className="flex flex-col items-center text-center mb-20">
      <div className="max-w-3xl w-full px-5">
        <h1 className="text-white text-5xl font-semibold mb-10">Projects</h1>
        <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-gray-900 p-5 w-64 flex items-center justify-center rounded-xl shadow-lg">
                <img src="/images/guy.png" className="w-full h-40 object-cover rounded-lg" alt="Project 1"/>
            </div>
            <div className="bg-gray-900 p-5 w-64 flex items-center justify-center rounded-xl shadow-lg">
                <img src="/images/guy.png" className="w-full h-40 object-cover rounded-lg" alt="Project 2"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
