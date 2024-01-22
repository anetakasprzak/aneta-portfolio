import "./Header.css";

export default function Header() {
  return (
    <header className="header__box">
      <img
        className="image"
        src="./assets/profile-picture.jpg"
        alt="aneta image"
      />

      <h1 className="heading">
        Hello World,
        <br /> I&apos;m Aneta Kasprzak.
      </h1>
    </header>
  );
}
