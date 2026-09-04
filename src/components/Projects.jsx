import { Button } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects">

      <h2> Mini Projects</h2>

      <div className="project-container">


        <div className="project">

          <h3>Coffee Shop Website</h3>

          <p>
            A responsive Single Page Application (SPA) developed with React.js,
            featuring an attractive user interface, smooth navigation, and an
            engaging customer experience for a coffee shop.
          </p>

          <p>
            <strong>Tech Stack:</strong> React.js | CSS | Bootstrap
          </p>

          <div className="project-btn">
            <Button variant="success"
              href="https://wilson-richard-coffeeshop.vercel.app/"
              target="_blank">
              View Project
            </Button>
          </div>

        </div>

        <div className="project">

          <h3>NexEvent – College Event Management Hub</h3>

          <p>
           Created a responsive college event management SPA. Implemented role-based access, interactive dashboards, and a modern user interface. 
          </p>

          <p>
            <strong>Development:</strong> HTML, CSS, Bootstrap, JavaScript.
          </p>

          <div className="project-btn">
            <Button variant="success"
            href="https://wilson-richard-event-management.vercel.app"
            target="_blank">
              View Project
            </Button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;