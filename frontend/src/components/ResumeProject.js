import React from 'react';
import { ProjectData } from '../data/Projects';

const ResumeProject = () => {
    return (
        <div className="container projects">
            <h2>Projects</h2>
            {ProjectData.map((project) => {
                return (
                    <div className="containerItem">
                        <h3>{project.name}</h3>
                        <p className="subheading projectLink">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.link}
                            </a>
                        </p>
                        <p>
                            {project.description.map((line) => {
                                return <p className="remark">{line}</p>;
                            })}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ResumeProject;
