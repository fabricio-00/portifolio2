import React from 'react';

function ProjectCard({ titulo, descricao, link, imagem, tag }) {
  return (
    <div className="project-card">
      <img className="project-img" src={imagem} alt={titulo} />
      <div className="project-info">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <div>
          <span className="tech-tag">{tag}</span>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <a href={link} style={{ color: '#0be916', fontSize: '0.9rem' }} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Ver Código
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;