import React from 'react';
import ResumePOR from '../components/ResumePOR';
import ResumeEducation from '../components/ResumeEducation';
import ResumeProject from '../components/ResumeProject';
import ResumeTechnicalSkills from '../components/ResumeTechnicalSkills';
// import ResumeExperience from '../components/ResumeExperience'
const Resume = () => {
    return (
        <div className="page resumePage">
            <h1>Resume</h1>
            <div className="mainContainer">
                <div className="section1">
                    <ResumeEducation />
                    <ResumeTechnicalSkills />
                </div>
                <div className="section2">
                    {/* <ResumeExperience/> */}
                    <ResumePOR />
                    <ResumeProject />
                </div>
            </div>
        </div>
    );
};

export default Resume;
