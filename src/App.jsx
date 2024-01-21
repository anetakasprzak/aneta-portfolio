import { useState } from "react";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className="wrapper" data-theme={isLightMode ? "light" : "dark"}>
      <div className="nav-container">
        <div
          className="theme__box nav__link"
          onClick={() => setIsLightMode((light) => !light)}
        >
          <p className="theme__text">{isLightMode ? "Dark" : "Light"}</p>
          <div className="theme__icon"></div>
          {isLightMode ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.5133 11.3967C19.3087 11.3453 19.1041 11.3966 18.9251 11.5251C18.2602 12.0901 17.4929 12.5523 16.649 12.8605C15.8562 13.1687 14.9866 13.3228 14.066 13.3228C11.9944 13.3228 10.1019 12.4753 8.74647 11.1142C7.39102 9.75303 6.54707 7.85258 6.54707 5.77237C6.54707 4.89919 6.70051 4.0517 6.95626 3.28125C7.23758 2.45944 7.64677 1.71467 8.18383 1.07263C8.414 0.790132 8.36285 0.379226 8.08153 0.148091C7.90251 0.0196826 7.69792 -0.0316807 7.49332 0.0196826C5.31949 0.61036 3.42698 1.92012 2.07153 3.66648C0.767234 5.38715 0 7.51872 0 9.83007C0 12.6294 1.12528 15.1719 2.96664 17.0209C4.808 18.87 7.3143 20 10.1275 20C12.4803 20 14.6542 19.1782 16.3932 17.8171C18.1579 16.4303 19.4366 14.4528 19.9737 12.1928C20.076 11.8332 19.8714 11.4737 19.5133 11.3967Z" />
            </svg>
          ) : (
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
            </svg>
          )}
        </div>
        <nav className="nav">
          <p className="nav__link">
            <a href="#about-me__section">About me</a>
          </p>
          <p className="nav__link">
            <a href="#projects__section">Portfolio</a>
          </p>
          <p className="nav__link">
            <a href="#contact__section">Contact</a>
          </p>
        </nav>
      </div>

      <header className="header__box">
        <img
          className="image"
          src="../public/20240113_105759 (1).jpg"
          alt="aneta image"
        />

        <h1 className="heading">Hello World, I&apos;m Aneta Kasprzak.</h1>
      </header>

      <section className="about-me__section" id="about-me__section">
        <p>
          During one of the lockdowns I found my passion for coding - started
          with playful exploration of HTML and CSS. The magic of coding
          captivated me, leading me to leave my hospitality job and plunge into
          the world of development. <br />I did JavaScript and React courses,
          spent countless hours making side projects to practice and focus to
          turn my passion into full time job as a React Developer.
        </p>
        <p>
          Beyond the screen, you&apos;ll find me in the kitchen, cooking and
          eating is my second big passion.
          <br /> When I&apos;m not sitting at my desk, I&apos;m lifting weights
          at the gym.
        </p>
      </section>

      <section className="skills__section">
        <p className="skill">
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
        </p>
      </section>

      <section className="projects__section" id="projects__section">
        <h3 className="portfolio__heading">Portfolio</h3>
        <div className="flex--wrap">
          <div className="project__card">
            <img
              className="project__img"
              src="../public/Screenshot 2024-01-20 at 15.23.48.png"
            />
            <div className="project__details">
              <ul>
                <li>API</li>
                <li>Random advice</li>
                <li>Loading state</li>
                <li>Error state</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>

          <div className="project__card">
            <img
              className="project__img"
              src="../public/Screenshot 2024-01-20 at 15.27.59.png"
            />
            <div className="project__details">
              <ul>
                <li>React Hook Form</li>
                <li>Input validation</li>
                <li>Error handling</li>
                <li>Success message</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>

          <div className="project__card">
            <img
              className="project__img"
              src="Screenshot 2024-01-20 at 15.29.30.png"
            />
            <div className="project__details">
              <ul>
                <li>Range input</li>
                <li>Custom icons</li>
                <li>Dynamic data</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>

          <div className="project__card">
            <img
              className="project__img"
              src="Screenshot 2024-01-20 at 15.31.27.png"
            />
            <div className="project__details">
              <ul>
                <li>API</li>
                <li>Search input</li>
                <li>Loading state</li>
                <li>Error state</li>
                <li>Dark/Light mode</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>

          <div className="project__card">
            <img
              className="project__img"
              src="Screenshot 2024-01-20 at 15.38.47.png"
            />
            <div className="project__details">
              <ul>
                <li>CRUD operations</li>
                <li>Input data</li>
                <li>Local storage</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>

          <div className="project__card">
            <img
              className="project__img"
              src="Screenshot 2024-01-20 at 15.33.25.png"
            />
            <div className="project__details">
              <ul>
                <li>React Hook Form</li>
                <li>Input validation</li>
                <li>Error handling</li>
                <li>Success message</li>
                <li>Dynamic data</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>

          <div className="project__card">
            <img
              className="project__img"
              src="Screenshot 2024-01-20 at 15.36.31.png"
            />
            <div className="project__details">
              <ul>
                <li>API</li>
                <li>Filtering</li>
                <li>Grid</li>
                <li>Error handling</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>

          <div className="project__card">
            <img
              className="project__img"
              src="Screenshot 2024-01-20 at 15.35.06.png"
            />
            <div className="project__details">
              <ul>
                <li>React Hook Form</li>
                <li>Input validation</li>
                <li>Error handling</li>
                <li>Success message</li>
                <li>Dynamic data</li>
                <li>Responsive design</li>
              </ul>
              <div className="view-code">
                <a href="#">View code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact__section" id="contact__section">
        <p className="contact__text">Contact me</p>
      </section>
    </div>
  );
}

/* 
            <i class="devicon-linkedin-plain"></i> linkedId icon

            <i class="devicon-github-original"></i> github
          
          */
