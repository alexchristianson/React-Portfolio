import React from 'react';
import avatar from '../../assets/images/avatar.jpg';

function About () {
    return (
        <section className='row'>
            <h1 className='col-12 my-4 mx-auto'>Alex Christianson</h1>
            <img className='col-sm-4 mx-auto mb-5' src={avatar} alt='Avatar of Alex Christianson' />
            <p className='col-6 my-5 mx-auto pb-5'>
            I am an aspiring web developer with a Full-Stack Coding Certificate from the University of Wisconsin. While working to earn my certificate, I used many of the skills I had refined during my 10 years as an educator such as time management, leadership, problem solving, and communication. 
            </p>
        </section>
    )
}

export default About;