import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Skills() {

  const skills = [
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={45} /> },
    { name: "React", icon: <FaReact color="#61DBFB" size={45} /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" size={45} /> },
    { name: "Express", icon: <SiExpress color="#2cc63b" size={45} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={45} /> },
    { name: "Java", icon: <FaJava color="#E76F00" size={45} /> },
    { name: "SQL", icon: <SiMysql color="#00758F" size={45} /> },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" size={45} /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={45} /> },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
     <p>Technologies and tools I use to build modern, scalable, and high-performance web applications.</p> 

      <div className="skills">
        {skills.map((skill) => (
          <div className="card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;