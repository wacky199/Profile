import React from 'react';

const Home = () => {
    const age = new Date().getFullYear() - 2001;
    return (
        <div className="homePage">
            <div className="home">
                <div className="name">
                    <h1>Shivam</h1>
                    <p id="subtitle"></p>
                </div>
                <div className="info">
                    <p className="subheading">
                        Age<span>{age}</span>
                    </p>
                    <p className="subheading">
                        Address<span>Indore</span>
                    </p>
                    <p className="subheading">
                        Email
                        <span>
                            <a
                                rel="noopener noreferrer"
                                href="mailto:cvam199@gmail.com"
                                target="_blank"
                            >
                                cvam199@gmail.com
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
