/* eslint react/prop-types: 0 */
import "./Projects.css";

const myProjects = [
  {
    id: 21,
    img: "./assets/advice-generator-screenshot.png",
    details: ["API", "Input validation", "Error handling", "Responsive design"],
    codeUrl: "https://github.com/anetakasprzak/FM-advice-generator-app-react",
  },
  {
    id: 22,
    img: "./assets/component-with-signup-form-screenshot.png",
    details: [
      "React Hook Form",
      "Input validation",
      "Error handling",
      "Success message",
      "Responsive design",
    ],
    codeUrl:
      "https://github.com/anetakasprzak/FM-component-with-signup-form-react",
  },
  {
    id: 23,
    img: "./assets/fylo-data-storage-component-screenshot.png",
    details: [
      "Range input",
      "Custom icons",
      "Dynamic data",
      "Responsive design",
    ],
    codeUrl:
      "https://github.com/anetakasprzak/FM-fylo-data-storage-component-react",
  },

  {
    id: 24,
    img: "./assets/github-user-search-app-screenshot.png",
    details: [
      "API",
      "Search input",
      "Loading state",
      "Error state",
      "Dark/Light mode",
      "Responsive design",
    ],
    codeUrl: "https://github.com/anetakasprzak/FM-github-user-search-app-react",
  },
  {
    id: 25,
    img: "./assets/your-shopping-list-screenshot.png",
    details: [
      "CRUD operations",
      "Input data",
      "Local storage",
      "Responsive design",
    ],
    codeUrl: "https://github.com/anetakasprzak/your-shopping-list-react",
  },
  {
    id: 26,
    img: "./assets/interactive-card-details-form-screenshot.png",
    details: [
      "React Hook Form",
      "Input validation",
      "Error handling",
      "Success message",
      "Dynamic data",
      "Responsive design",
    ],
    codeUrl:
      "https://github.com/anetakasprzak/FM-interactive-card-details-form-react",
  },
  {
    id: 27,
    img: "./assets/countries-api-screenshot.png",
    details: [
      "API",
      "Filtering",
      "Grid",
      "Error handling",
      "Responsive design",
    ],
    codeUrl: "https://github.com/anetakasprzak/countries-API",
  },
  {
    id: 28,
    img: "./assets/newsletter-sign-up-with-success-screenshot.png",
    details: [
      "React Hook Form",
      "Input validation",
      "Error handling",
      "Success message",
      "Dynamic data",
      "Responsive design",
    ],
    codeUrl:
      "https://github.com/anetakasprzak/FM-newsletter-sign-up-with-success-message",
  },
];

export default function Projects() {
  return (
    <section className="projects__section" id="projects__section">
      <h3 className="portfolio__heading">Portfolio</h3>
      <div className="flex--wrap">
        {myProjects?.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            details={project.details}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ img, details, codeUrl }) {
  return (
    <div className="project__card">
      <img className="project__img" src={img} />
      <div className="project__details">
        {details && (
          <ul>
            {details?.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}

        <div className="view-code">
          <a href={codeUrl} target="_blank" rel="noreferrer noopener">
            View code
          </a>
        </div>
      </div>
    </div>
  );
}
