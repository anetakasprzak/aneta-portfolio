/* eslint react/prop-types: 0 */
import "./Projects.css";

const myProjects = [
  {
    id: 17,
    img: "./assets/ecommerce-product-page.png",
    details: [
      "Image carousel",
      "Modal",
      "Cart notification",
      "Sidebar navigation",
      "Responsive design",
    ],
    codeUrl: "https://github.com/anetakasprzak/fm-ecommerce-product-page",
    liveUrl: "https://fm-ecommerce-product-page-gamma.vercel.app/",
  },
  {
    id: 18,
    img: "./assets/clock-location-app.png",
    details: [
      "Random quotes API",
      "IPbase API",
      "WorldTime API",
      "Grid",
      "Responsive design",
      "Day/Night mode",
    ],
    codeUrl: "https://github.com/anetakasprzak/fm-clock-app-react",
    liveUrl: "https://fm-clock-app-react.vercel.app/",
  },
  {
    id: 19,
    img: "./assets/photosnap-multipage.png",
    details: [
      "Next.js",
      "React Hook Form",
      "Mobile Navigation",
      "Grid",
      "Responsive design",
    ],
    codeUrl:
      "https://github.com/anetakasprzak/fm-photosnap-multi-page-website-next",
    liveUrl:
      "https://fm-photosnap-multi-page-website-next-41q2k46ra.vercel.app/",
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
    codeUrl: "https://github.com/anetakasprzak/fm-github-user-search-app-react",
    liveUrl: "https://fm-github-user-search-app-react.vercel.app/",
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
      "https://github.com/anetakasprzak/fm-newsletter-sign-up-with-success-message",
    liveUrl:
      "https://fm-newsletter-sign-up-with-success-message-liart.vercel.app/",
  },
  {
    id: 20,
    img: "./assets/single-page-design-portfolio-2.png",
    details: ["Form", "Modal", "Grid", "Responsive design"],
    codeUrl:
      "https://github.com/anetakasprzak/fm-single-page-design-portfolio-react",
    liveUrl: "https://fm-single-page-design-portfolio-react.vercel.app/",
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
      "https://github.com/anetakasprzak/fm-component-with-signup-form-react",
    liveUrl: "https://fm-component-with-signup-form-react.vercel.app/",
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
      "https://github.com/anetakasprzak/fm-fylo-data-storage-component-react",
    liveUrl: "https://fm-fylo-data-storage-component-react.vercel.app/",
  },
  {
    id: 25,
    img: "./assets/todo-app.png",
    details: [
      "CRUD operations",
      "Drag and drop",
      "Filters",
      "Responsive design",
    ],
    codeUrl: "https://github.com/anetakasprzak/fm-todo-app",
    liveUrl: "https://fm-todo-app-psi.vercel.app/",
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
      "https://github.com/anetakasprzak/fm-interactive-card-details-form-react",
    liveUrl: "https://fm-interactive-card-details-form-react-gold.vercel.app/",
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
    codeUrl: "https://github.com/anetakasprzak/countries-api",
    liveUrl: "https://countries-api-ochre-beta.vercel.app/",
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
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ img, details, codeUrl, liveUrl }) {
  return (
    <div className="project__card">
      <div className="img__container">
        <img className="project__img" src={img} />
      </div>

      <div className="project__details">
        {details && (
          <ul>
            {details?.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div className="view-code">
            <a href={codeUrl} target="_blank" rel="noreferrer noopener">
              View code
            </a>
          </div>
          {liveUrl && (
            <div className="view-live">
              <a
                className="view-live"
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                View live
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
