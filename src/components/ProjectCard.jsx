import { Link } from 'react-router-dom';
import SpotlightCard from './bits/SpotlightCard';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card-link">
      <SpotlightCard className="project-card">
        <div className="project-card__thumb">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} loading="lazy" />
          ) : (
            <div className="project-card__placeholder">
              <span>{project.title.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="project-card__info">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
