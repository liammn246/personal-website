function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mb-30 text-center md:text-left">
      <div className="text-white mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-5xl font-semibold mb-4">Hi, I'm Liam</h1>
        <p className="text-2xl">
          I’m a software developer who loves turning ideas into things people
          can actually use and enjoy. Whether it’s a web app, a game, or a cool side
          projects. I am most interested in back end web development, as well as systems 
          architecture.
        </p>
      </div>
      <img src="/images/pfp.jpeg" className="rounded-full w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] object-cover" alt="Profile"/>
    </section>
  )
}

export default About
