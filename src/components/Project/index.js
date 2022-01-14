import React from 'react';
import ProjectCard from '../Project-Card';
// import image from '../../assets/images/gamespotblog.jpg'

const portfolio = [
    {
        name: "Game Spot Blog",
        description: "A blog for gamers made with node.js, express, MySql, sequelize, dotenv, bcrypt, bulma, express-session, and handlebars.",
        // image: src={require("../../assets/images/gamespotblog.jpg")},
        url: "https://tranquil-tor-89831.herokuapp.com/",
        github: "https://github.com/alexchristianson/game-spot-blog"
    },
    {
        name: "",
        description: "",
        image: "",
        url: "",
        github: ""
    },    {
        name: "",
        description: "",
        image: "",
        url: "",
        github: ""
    },    {
        name: "",
        description: "",
        image: "",
        url: "",
        github: ""
    },    {
        name: "",
        description: "",
        image: "",
        url: "",
        github: ""
    },    {
        name: "",
        description: "",
        image: "",
        url: "",
        github: ""
    }   
]

function Projects() {
    return (
        <div>
          <h1 className="title">Projects</h1>
          {portfolio.map(function(portfolio) {
            return <ProjectCard 
                name={portfolio.name}
                description={portfolio.description}
                image={portfolio.image}
                url={portfolio.url}
                github={portfolio.github}
            />
        })}
        </div>
    );
}

export default Projects;