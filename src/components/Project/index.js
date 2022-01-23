import React from 'react';
import ProjectCard from '../Project-Card';
import image1 from '../../assets/images/gamespotblog.jpg';
import image2 from '../../assets/images/weatherdashboard.jpg';
import image3 from '../../assets/images/reelroulette.jpg';
import image4 from '../../assets/images/workdayscheduler.jpg';
import image5 from '../../assets/images/budgettracker.jpg';
import image6 from '../../assets/images/codingquiz.jpg';


const portfolio = [
    {
        name: "Game Spot Blog",
        description: "A blog for gamers made with node.js, express, MySql, sequelize, dotenv, bcrypt, bulma, express-session, and handlebars.",
        image: image1,
        url: "https://tranquil-tor-89831.herokuapp.com/",
        github: "https://github.com/alexchristianson/game-spot-blog"
    },
    {
        name: "Weather Dashboard",
        description: "A weather app that displays current weather and 5 day forecast for a desired city.",
        image: image2,
        url: "https://alexchristianson.github.io/weather-dashboard/",
        github: "https://github.com/alexchristianson/weather-dashboard"
    },    
    {
        name: "Reel Roulette",
        description: "Website that will generate a random movie and a video trailer using The Movie Database api and Youtube video search api.",
        image: image3,
        url: "https://alexchristianson.github.io/reel-roulette/",
        github: "https://github.com/alexchristianson/reel-roulette"
    },    
    {
        name: "Work Day Scheduler",
        description: "This is a simple calendar application that allows a user to save and track events for each hour of the day.",
        image: image4,
        url: "https://alexchristianson.github.io/work-day-scheduler/",
        github: "https://github.com/alexchristianson/work-day-scheduler"
    },    
    {
        name: "Budget Tracker",
        description: "Budget Tracker is a Progressive Web Application(PWA) that allows users to track their expenses both online and offline.",
        image: image5,
        url: "https://sheltered-cove-24369.herokuapp.com/",
        github: "https://github.com/alexchristianson/budget-tracker"
    },    
    {
        name: "Coding Quiz",
        description: "A site with a timed quiz for users to review Javascript fundamentals and gauge their progress.",
        image: image6,
        url: "https://alexchristianson.github.io/coding-quiz/",
        github: "https://github.com/alexchristianson/coding-quiz"
    }   
]

function Projects() {
    return (
        <div className='row justify-content-center me-5'>
          <h1 className="title mb-5">Projects</h1>
          {portfolio.map(function(portfolio) {
            return <ProjectCard 
                name={portfolio.name}
                description={portfolio.description}
                image={portfolio.image}
                url={portfolio.url}
                github={portfolio.github}
                key={portfolio.name}
            />
        })}
        </div>
    );
}

export default Projects;