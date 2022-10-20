import React from "react";

function Resume() {
    return (
        <section  class="resume-info">
            <p>Download my <a class="resume" href='./assets/files/Resume_2022.pdf' download>Resume</a></p>
            <div>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Sesign</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>                
            </div>
            <div>
                <h2>Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>                
            </div>
        </section>
    )
}

export default Resume;