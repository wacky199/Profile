import React from 'react';
import aboutMeImg from '../images/aboutMeIntro.svg';
const About = () => {
    return (
        <div className="page">
            <h1>About Me</h1>
            <div className="aboutPage">
                <div className="aboutMeIntro">
                    <div className="aboutMeImg">
                        <img src={aboutMeImg} alt="IntroLogo" />
                    </div>
                    <div>
                        <h3 className="idea">
                            “Do whatever you like, just don’t be lazy.”
                        </h3>
                    </div>
                </div>
                <h2>Programmer and self learner</h2>
                <p>
                    Hello, my name is Shivam, an undergraduate student at IIT
                    Indore. As everyone says, college life is all about learning
                    and exploring; I did the same. I explored many things being
                    it technical or non-technical. I always kept probing what
                    I'm exactly into. I recently bumped into programming and
                    developing software during the lockdown, and since then, my
                    journey to a new domain started. My exploration led me to
                    something which eventually became my passion. I find myself
                    fortunate enough to follow this route as my career path.
                </p>
            </div>
        </div>
    );
};

export default About;
