import React from 'react';
import resume from '../../assets/Resume/Resume.pdf'

function Resume() {
    return (
        <div>
            <h1>Download my resume</h1>
            <a href={resume} target="_blank">Resume</a>
        </div>
    )
}

export default Resume;