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
        <strong>Passionate Full Stack Developer skilled in MERN Stack and Java Full Stack development. 
          I build responsive, scalable, and user-friendly web applications.</strong>
      </p>
      
      <Button variant="primary" href="/Wilson_Resume.pdf"  className="btn" download>
        📄 Download Resume
      </Button>

    </section>
  );
}

export default Hero;