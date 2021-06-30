import React from 'react';
import { ExperienceData } from '../data/Experience';

const ResumeExperience = () => {
    return (
        <div className="container projects">
            <h2>Experience</h2>
            {ExperienceData.map((company) => {
                return (
                    <div className="containerItem">
                        <h3>{company.name}</h3>
                        <p className="subheading companyLink">
                            <a
                                href={company.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {company.link}
                            </a>
                        </p>
                        <p className="subheading duration">
                            {company.duration}
                        </p>
                        <p>
                            {company.description.map((line) => {
                                return <p className="remark">{line}</p>;
                            })}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ResumeExperience;
