import React from 'react';
import avatar from '../../assets/images/avatar.jpg';

function About () {
    return (
        <section>
            <h1 className='my-5'>Alex Christianson</h1>
            <img src={avatar} alt='Avatar of Alex Christianson' />
            <p className='mb-5'>
                Here is a bio about me. It is full of interesting facts that make you want to hire me.
            </p>
        </section>
    )
}

export default About;