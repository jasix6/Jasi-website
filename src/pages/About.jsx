import ScrollReveal from '../components/bits/ScrollReveal';
import FadeIn from '../components/FadeIn';
import './About.css';

const skills = [
  { category: 'Languages', items: ['Swift', 'Python', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks', items: ['SwiftUI', 'AppKit', 'React', 'Vue'] },
  { category: 'Tools', items: ['Xcode', 'Git', 'Figma', 'Vite'] },
  { category: 'Interests', items: ['macOS Apps', 'CLI Tools', 'Developer Experience', 'UI Design'] },
];

export default function About() {
  return (
    <div className="about container">
      <section className="about__hero">
        <ScrollReveal containerClassName="about__title">
          About Me
        </ScrollReveal>
        <FadeIn delay={200}>
          <p className="about__intro">
            CS student focused on building native Mac applications.
            I care about clean code, thoughtful design, and tools that developers actually enjoy using.
          </p>
        </FadeIn>
      </section>

      <section className="about__skills">
        <FadeIn>
          <h2 className="about__section-heading">Skills & Tools</h2>
        </FadeIn>
        <div className="about__skills-grid">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 80}>
              <div className="about__skill-group">
                <h3>{group.category}</h3>
                <div className="about__skill-items">
                  {group.items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="about__contact">
        <FadeIn>
          <div className="about__contact-inner">
            <h2>Get in Touch</h2>
            <p>Open to opportunities. Let's build something great.</p>
            <div className="about__contact-links">
              <a href="https://github.com/jasix6" target="_blank" rel="noopener noreferrer" className="about__contact-btn">
                GitHub
              </a>
              <a href="mailto:jasix6@users.noreply.github.com" className="about__contact-btn about__contact-btn--ghost">
                Email
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
