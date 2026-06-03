import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title-line">Jasi</span>
          </h1>
          <p className="hero__subtitle">
            Building native Mac apps with precision and craft.
          </p>
          <div className="hero__cta">
            <a href="/Jasi-website/projects" className="hero__btn hero__btn--primary">
              View Projects
            </a>
            <a href="/Jasi-website/about" className="hero__btn hero__btn--ghost">
              About Me
            </a>
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
