export default function App() {
  return (
    <div className="wrapper">
      <nav className="nav">
        <p className="nav__link">
          <a href="#projects__section">About me</a>
        </p>
        <p className="nav__link">
          <a href="#projects__section">Portfolio</a>
        </p>
        <p className="nav__link">
          <a href="#projects__section">Contact</a>
        </p>
      </nav>
      <header className="header__box">
        <img
          className="image"
          src="../public/20240113_105759 (1).jpg"
          alt="aneta image"
        />
        <h1 className="heading">Hello World, I&apos;m Aneta Kasprzak.</h1>
      </header>
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
    </div>
  );
}

/* 
            <i class="devicon-linkedin-plain"></i> linkedId icon

            <i class="devicon-github-original"></i> github
          
          */
