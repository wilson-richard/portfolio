import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiInsomnia,
  SiVercel,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava color="#E76F00" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact color="#61DBFB" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
        { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
        { name: "REST APIs", icon: <FaServer color="#38BDF8" /> },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#00758F" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
        { name: "VS Code", icon: <FaCode color="#007ACC" /> },
        { name: "Insomnia", icon: <SiInsomnia color="#5849BE" /> },
        { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
      ],
    },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <p className="skills-intro">
        Technologies and tools I use to build modern, responsive,
        and user-friendly web applications.
      </p>

      <div className="skill-categories">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">
                    {skill.icon}
                  </span>

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;