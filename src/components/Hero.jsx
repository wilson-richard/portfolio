import Button from 'react-bootstrap/Button';
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        {/* LEFT SIDE - TEXT */}
        <div className="hero-text">

          <h1>Hi, I'm Wilson</h1>

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
            <strong>
              Full Stack Developer with hands-on experience in MERN Stack development and knowledge of Java, SQL, and modern web technologies. I build responsive and user-friendly web applications with a focus on clean and practical solutions.
            </strong>
          </p>

          <Button
            variant="success"
            href="/Wilson_Resume.pdf"
            className="btn"
            download
          >
            📄 Download Resume
          </Button>

        </div>

        {/* RIGHT SIDE - PROFILE */}
        <div className="hero-image">

          <img
            src="/profile.png"
            alt="image not found"
            className="profile"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;