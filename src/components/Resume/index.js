import React from 'react';
import resume from '../../assets/Resume/Resume.pdf'

function Resume() {
    return (
        <div>
            <h2>Skills and Resume</h2>
            <h4>Skills</h4>
                <ul className='row'>
                    <li className='col-sm-4 mb-2'>Git/GitHub</li>
                    <li className='col-sm-4 mb-2'>JavaScript</li>
                    <li className='col-sm-4 mb-2'>HTML/CSS</li>
                    <li className='col-sm-4 mb-2'>jQuery</li>
                    <li className='col-sm-4 mb-2'>MongoDB</li>
                    <li className='col-sm-4 mb-2'>Express.js</li>
                    <li className='col-sm-4 mb-2'>React.js</li>
                    <li className='col-sm-4 mb-2'>Node.js</li>
                    <li className='col-sm-4 mb-2'>Bootstrap</li>
                    <li className='col-sm-4 mb-2'>PWAs</li>
                </ul>
            <a href={resume} target="_blank" className='resume'>Download my resume here!</a>
        </div>
    )
}

export default Resume;