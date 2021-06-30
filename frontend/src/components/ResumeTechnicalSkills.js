import React from 'react';
import { TechnicalSkills } from '../data/TechnicalSkills';
const ResumeTechnicalSkills = () => {
    return (
        <div className="container technicalSkills">
            <h2>Technical Skills</h2>
            {TechnicalSkills.map((skill) => {
                return (
                    <div>
                        <h3>{skill.skillType}</h3>
                        <p className="skills">
                            {skill.items.map((item, index) => {
                                const len = skill.items.length;
                                if (index !== len - 1) {
                                    return `${item} , `;
                                } else {
                                    return `${item}`;
                                }
                            })}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ResumeTechnicalSkills;
