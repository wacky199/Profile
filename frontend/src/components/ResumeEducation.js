import React from 'react'
import { EducationData } from '../data/Education';

const ResumeEducation = () => {
    return (
        <div className="container education">
            <h2>Education</h2>
            {EducationData.map((edu) => {
                return (
                    <div className="containerItem">
                        <h3>{edu.degree}</h3>
                        <p className="subheading">{edu.college}</p>
                        <p className="subheading passingYear">
                            {edu.passingYear}
                        </p>
                        <p className="remark educationRemark">{edu.result}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ResumeEducation
