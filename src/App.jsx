import Topbar from "./components/Topbar.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Topbar />
      <main className="pt-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <About />
          <Projects />
        </div>
      </main>
    </div>
  )
}

export default App
