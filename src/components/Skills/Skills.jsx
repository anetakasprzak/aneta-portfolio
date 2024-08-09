import "./Skills.css";

const skills = [
  { id: 1, icon: "devicon-html5-plain-wordmark" },
  { id: 2, icon: "devicon-css3-plain-wordmark" },
  { id: 4, icon: "devicon-tailwindcss-original" },
  { id: 5, icon: "devicon-javascript-plain" },
  { id: 6, icon: "devicon-react-original-wordmark" },
  { id: 7, icon: "devicon-nextjs-original-wordmark" },
  { id: 8, icon: "devicon-vscode-plain-wordmark" },
  { id: 9, icon: "devicon-github-original-wordmark" },
  { id: 10, icon: "devicon-figma-plain" },
];

export default function Skills() {
  return (
    <section className="skills__section">
      {skills.map((skill) => (
        <p className="skill" key={skill.id}>
          <i className={skill.icon}></i>
        </p>
      ))}
    </section>
  );
}
