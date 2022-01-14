import React from 'react';
// import './style.css';

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Link:</strong> {props.url}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;