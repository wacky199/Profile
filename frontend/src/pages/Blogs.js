import React from 'react';

const Blogs = () => {
    return (
        <div className="page">
            <h1>Blogs</h1>
            <div className="blogPage">
                <p>
                    Hello there, I have uploaded some files/blogs over this{' '}
                    <a
                        className="link"
                        href="https://wacky199.github.io/md-blog/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        site
                    </a>
                    . At this time it just contains some lorem ipsum. By the
                    way, it is a static site build using GATSBYjs. Fell free to
                    explore.
                </p>
                <h4 className="info">
                    <a
                        href="https://wacky199.github.io/md-blog/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Goto the Site
                    </a>
                </h4>
            </div>
        </div>
    );
};

export default Blogs;
