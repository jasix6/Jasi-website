import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/bits/ScrollReveal';
import FadeIn from '../components/FadeIn';
import projects from '../data/projects';
import './Home.css';

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="home">
      <Hero />

      <section className="home__featured container">
        <ScrollReveal containerClassName="home__section-title">
          Featured Projects
        </ScrollReveal>
        <div className="home__grid">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="home__about-preview container">
        <FadeIn>
          <div className="home__about-inner">
            <h2>About Me</h2>
            <p>
              CS student passionate about building native Mac applications.
              Focused on clean architecture, thoughtful UI, and developer experience.
            </p>
            <a href="/Jasi-website/about" className="home__about-link">
              Learn more →
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
