export default function Contact() {
  return (
    <section className="contact__section" id="contact__section">
      <p className="contact__text">Aneta Kasprzak</p>
      <p>
        Contact:{" "}
        <a className="contact__email" href="mailto:anet.kasprzak@gmail.com">
          anet.kasprzak@gmail.com
        </a>
      </p>
      <div className="contact__links-box">
        <div className="contact__linkedin">
          <a
            href="https://www.linkedin.com/in/aneta-kasprzak-43387a27a"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
        <div className="contact__github">
          <a
            href="https://github.com/anetakasprzak"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="devicon-github-original"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
