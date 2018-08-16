import React, {Component} from 'react';

class Intro extends Component{
    render(){
    return(
        <div className='intro'>
        <h1 id='welcome-title'>Welcome to my page, let me introduce myself.</h1>
        <p id='intro-p'>My name is Daniel Childs. I am a Glasgow based Software Engineer specialising in full-stack web application development. I have recently gradudated from <a href='https://codeclan.com/'>Codeclan's Software Engineering Academy</a> and have experince developing ful-stack web applicatios using Node.JS, React.JS, Java and Ruby.</p>
        <p id='career-change-p'>I started my career as a Techincal Recruitment Consultant. Similar to a lot of Recruitment Consultants I sort of fell into this industry and started out as an Apprentice in a start-up agency. Eventually I started to focus soley in Software Engineering Recruitment and after interviewing candidates on a daily basis I became interested in Software Engineeering myself and my head started to turn.
                    I began leanring so of the basics through CodeCademy to get a compettive edge in Recruitment but ended up really enjoying it and wanted to learn more. This eagerness to learn more eventually lead me to quiting my job and joining CodeClan.
        </p>
        <div className="career-change-reasons">
        <p>The main reasons I wanted to become a Software Engineeer and embark on this journey were:</p>
        <ul>
            <li>I wanted to learn a new skill</li>
            <li>To work in a growing indutrty that will never stop challenging me</li>
            <li>Build applicaitions that improves peoples lives</li>
            <li>Do something that I love</li>
        </ul>
        </div>
        
        </div>
    )  
    }
} 


export default Intro