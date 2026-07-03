import { Typewriter } from "react-simple-typewriter";
function Hero() {
  return (
    <section className="hero">

      <img
        src="/profile.jpg"
        alt="image not found"
        className="profile"
      />

      <h1>Hi, I'm Wilson 👋</h1>

     <h3>
  <Typewriter
    words={[
      "Full Stack Developer"
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h3>

      <p>
        Passionate Full Stack Developer specializing in the MERN stack. I build responsive, scalable, and user-friendly web applications with clean code and modern technologies.
      </p>

      <a
          href="/resume.pdf"
          download
          className="btn"
      >
        📄 Download Resume
      </a>

    </section>
  );
}

export default Hero;