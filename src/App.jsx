export default function App() {
  return (
    <div className="wrapper">
      <nav className="nav">
        <p className="nav__link">About me</p>
        <p className="nav__link">Portfolio</p>
        <p className="nav__link">Contact</p>
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
          Html
          <i className="devicon-html5-plain-wordmark"></i>
        </p>
        <p className="skill">
          Css
          <i className="devicon-css3-plain-wordmark"></i>
        </p>
        <p className="skill">
          JavaScript
          <i className="devicon-javascript-plain"></i>
        </p>
        <p className="skill">
          React
          <i className="devicon-react-original-wordmark"></i>
        </p>
        <p className="skill">
          Github
          <i className="devicon-github-original-wordmark"></i>
        </p>
        <p className="skill">
          VScode
          <i className="devicon-vscode-plain-wordmark"></i>
        </p>
        <p className="skill">
          Sass
          <i className="devicon-sass-original"></i>
        </p>
        <p className="skill">
          figma
          <i className="devicon-figma-plain"></i>
        </p>
      </section>

      <section className="projects__section">
        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.23.48.png"
        />

        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.27.59.png"
        />

        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.29.30.png"
        />

        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.31.27.png"
        />

        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.38.47.png"
        />

        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.33.25.png"
        />

        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.36.31.png"
        />

        <img
          className="project__img"
          src="../public/Screenshot 2024-01-20 at 15.35.06.png"
        />
      </section>
    </div>
  );
}

/* 
            <i class="devicon-linkedin-plain"></i> linkedId icon

            <i class="devicon-github-original"></i> github
          
          */
