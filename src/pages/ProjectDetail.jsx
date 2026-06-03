import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import FadeIn from '../components/FadeIn';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail container">
        <div className="project-detail__not-found">
          <h2>Project not found</h2>
          <Link to="/projects" className="project-detail__back">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail container">
      <FadeIn>
        <Link to="/projects" className="project-detail__back">← All Projects</Link>
      </FadeIn>

      <FadeIn delay={100}>
        <header className="project-detail__header">
          <h1 className="project-detail__title">{project.title}</h1>
          <div className="project-detail__meta">
            <span className="project-detail__year">{project.year}</span>
            <div className="project-detail__tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="project-detail__hero-img">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} />
          ) : (
            <div className="project-detail__placeholder">
              <span>{project.title}</span>
            </div>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="project-detail__body">
          <div className="project-detail__desc">
            <h2>About</h2>
            <p>{project.longDescription || project.description}</p>
          </div>

          <div className="project-detail__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                View on GitHub →
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
