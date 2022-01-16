import React from 'react';

function ProjectCard(props) {
  return (
    <div className="card col-md-5 col-sm-12 ms-auto mb-5 border border-2 border-dark">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="card-body">
        
            <h5 className='card-title'>
                <strong>{props.name}</strong> 
            </h5>
            <h6 className='card-text'>
                {props.description}
            </h6>
            <a className='card-link' href='{props.url}'>Deployed Page</a>
            <a className='card-link' href='{props.github'>GitHub Repo</a>
        </div>
    </div>
  );
}

export default ProjectCard;