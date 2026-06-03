import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/bits/ScrollReveal';
import FadeIn from '../components/FadeIn';
import projects from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-page container">
      <div className="projects-page__header">
        <ScrollReveal containerClassName="projects-page__title">
          All Projects
        </ScrollReveal>
        <p className="projects-page__subtitle">
          A collection of things I've built.
        </p>
      </div>

      <div className="projects-page__grid">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
