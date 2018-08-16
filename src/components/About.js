import React, {Component} from 'react';
import WorkExpiernce from './WorkExperence';
import RecruitmentExperience from './RecruitmentExperience';

class About extends Component {
    render(){
        return(
            <div>
                <WorkExpiernce/>
                <RecruitmentExperience/>


            </div>
        ) 
    }  
}  

export default About