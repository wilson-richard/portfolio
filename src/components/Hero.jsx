import Button from 'react-bootstrap/Button';
import { Typewriter } from "react-simple-typewriter";
function Hero() {
  return (
    <section  id="home" className="hero">

      <img
        src="/profile.png"
        alt="image not found"
        className="profile"
      />

      <h1>Hi, I'm Wilson </h1>

     <h3>
  <Typewriter
    words={[
      "Full Stack Developer",
      "Programmer"
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
        <strong>Full Stack Developer skilled in MERN Stack and Java development. 
          I build responsive and user-friendly web applications using modern technologies.</strong>
      </p>
      
      <Button variant="primary" href="/Wilson_Resume.pdf"  className="btn" download>
        📄 Download Resume
      </Button>

    </section>
  );
}

export default Hero;