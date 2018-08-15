import React, {Component} from 'react';

class WorkExpiernce extends Component {
    render(){
        return(
            <div className='cv'>
            <div className="key-skills">
            <h1 className="h1-titles">Key Skills and Technologies</h1>
            <ul>
            <li>JavaScript, Node.JS, Express.JS, React.JS, HTML</li>
            <li>Ruby, Sinatra, SQL, MiniTest, Pry, PostgreSQL</li>
            <li>Java, Hibernate, Spark, Maven, Junit</li>
            <li>MongoDB, Git, Selenium, Mocha, CSS</li>
            </ul>
            </div>

            <h1 className="h1-titles">Experience</h1>
            <h2>Software Engineering Student - CodeClan - March 2018 - July 2018 </h2>
            <p className='position-summary'>CodeClan is a digital skills and coding academy for learning software engineering and digital skills. I have developed a range of full-stack web applications working individually and as a part of a team. During CodeClan I covered a wide range of technologies and I have experience working with Java, JavaScript, Node.JS, and Ruby. </p>
            <div className='position-skills-list'>
            <h3 className="position-skills-list-title">Key Technologies and Skills</h3>
            <ul>
                <li>JavaScript, Node.JS, Express.JS, React.JS</li>
                <li>Java, Hibernate, Spark, Velocity </li>
                <li>Ruby, Sinatra, PostgreSQL, MongoDB, Git </li>
            </ul>
            </div>
            </div>
        )
    }
}

export default WorkExpiernce