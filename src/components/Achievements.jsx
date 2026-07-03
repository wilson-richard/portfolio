import { useState } from "react";

function Achievements() {
  const [selected, setSelected] = useState(null);

  const achievements = [
    {
      title: "🥇 Certificate of Merit",
      image: "/cert-1.jpeg",
    },
    {
      title: " 🎯 React Workshop",
      image: "/cert-2.jpeg",
    },
    {
      title: " 🎓 Degree Certificate",
      image: "/cert-3.jpeg",
    },
  ];

  return (
    <section id="achievements">
      <h2>Achievements</h2>

      <div className="marquee">
        <div className="marquee-content">
          {achievements.map((item, index) => (
            <span
              key={index}
              onClick={() => setSelected(item.image)}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>

      {selected && (
        <div className="popup" onClick={() => setSelected(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}> ✖ </button>

            <img src={selected} alt="certificate" />
          </div>
        </div> 
      )}
    </section>
  );
}

export default Achievements;