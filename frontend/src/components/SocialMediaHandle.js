import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
const SocialMediaHandle = () => {
    return (
        <div>
            {/* LinkedIn Profile */}
            <IconButton
                href="https://www.linkedin.com/in/wacky199/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon  style={{ color: green[500] }} />
            </IconButton>

            {/* GitHub Profile */}
            <IconButton
                href="https://github.com/wacky199?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon style={{ color: green[500] }} />
            </IconButton>

            {/* InstaGram Profile */}
            <IconButton
                href="https://www.instagram.com/wacky199/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon
                    style={{ color: green[500] }}
                />
            </IconButton>
        </div>
    );
};

export default SocialMediaHandle;
