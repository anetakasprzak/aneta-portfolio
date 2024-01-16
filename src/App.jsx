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
        <p className="skill">Html</p>
        <p className="skill">Css</p>
        <p className="skill">JavaScript</p>
        <p className="skill">React</p>
      </section>
    </div>
  );
}
