import { Button } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="project-container">

        <div className="project">

          <h3>Portfolio Website</h3>

          <p>
            A responsive personal portfolio website developed using React.js
            to showcase my skills, projects, and contact information with a
            modern and user-friendly interface.
          </p>

          <p>
            <strong>Tech Stack:</strong> React.js | CSS | Bootstrap
          </p>

          <div className="project-btn">
            <Button
              variant="primary"
              onClick={() => alert("You are currently viewing this Portfolio website.")}
            >
              View Project
            </Button>
          </div>

        </div>

        <div className="project">

          <h3>NexEvent – College Event Management Hub</h3>

          <p>
           Created a responsive college event management SPA using vibe coding (AI prompt engineering) to accelerate development. Features include role-based access, interactive dashboards, and local storage.
          </p>

          <p>
            <strong>Development:</strong> Vibe Coding (Prompt Engineering with Antigravity AI)
          </p>

          <div className="project-btn">
            <Button variant="primary"
            href="https://wilson-richard-event-management.vercel.app"
            target="_blank">
              View Project
            </Button>
          </div>

        </div>

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
            <Button variant="primary"
              href="https://wilson-richard-coffeeshop.vercel.app/"
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