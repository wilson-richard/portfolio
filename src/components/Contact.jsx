import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2>Contact</h2>
      <p>Let's Connect</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <a
          href="tel:+918098941918"
          title="Call Me"
        >
          <FaPhone size={35} color="green" />
        </a>

        <a
          href="mailto:richard2004wilson@gmail.com"
          title="Email Me"
        >
          <FaEnvelope size={35} color="#EA4335" />
        </a>

        <a
          href="https://www.linkedin.com/in/wilson-richard"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size={35} color="#0A66C2" />
        </a>
      </div>
    </section>
  );
}

export default Contact;