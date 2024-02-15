import "./Skills.css";

const skills = [
  { id: 1, icon: "devicon-html5-plain-wordmark" },
  { id: 2, icon: "devicon-css3-plain-wordmark" },
  { id: 3, icon: "devicon-sass-original" },
  { id: 4, icon: "devicon-javascript-plain" },
  { id: 5, icon: "devicon-react-original-wordmark" },
  { id: 6, icon: "devicon-vscode-plain-wordmark" },
  { id: 7, icon: "devicon-github-original-wordmark" },
  { id: 8, icon: "devicon-figma-plain" },
];

export default function Skills() {
  return (
    <section className="skills__section">
      {skills.map((skill) => (
        <p className="skill" key={skill.id}>
          <i className={skill.icon}></i>
        </p>
      ))}
      {/* <p className="skill">
        <i className="devicon-html5-plain-wordmark"></i>
      </p>
      <p className="skill">
        <i className="devicon-css3-plain-wordmark"></i>
      </p>
      <p className="skill">
        <i className="devicon-sass-original"></i>
      </p>
      <p className="skill">
        <i className="devicon-javascript-plain"></i>
      </p>
      <p className="skill">
        <i className="devicon-react-original-wordmark"></i>
      </p>
      <p className="skill">
        <i className="devicon-vscode-plain-wordmark"></i>
      </p>
      <p className="skill">
        <i className="devicon-github-original-wordmark"></i>
      </p>
      <p className="skill">
        <i className="devicon-figma-plain"></i>
      </p> */}
    </section>
  );
}
