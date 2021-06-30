import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const ThemeSocialPlateformIcon = createMuiTheme({
    props: {
        MuiSvgIcon: {
            fontSize: 'large',
            htmlColor: '#7AD5AA',
        },
    },
});
const ContactSocialMediaHandles = () => {
    return (
        <div class="platforms">
            <h2>Social Media</h2>
            <p subheading>Find me on....</p>
            <ThemeProvider theme={ThemeSocialPlateformIcon}>
                <div className="socialMediaPlatforms">
                    {/* LinkedIn Profile */}
                    <IconButton
                        href="https://www.linkedin.com/in/wacky199/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </IconButton>

                    {/* GitHub Profile */}
                    <IconButton
                        href="https://github.com/wacky199?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                    </IconButton>

                    {/* InstaGram Profile */}
                    <IconButton
                        href="https://www.instagram.com/wacky199/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon />
                    </IconButton>

                    {/* facebook Profile */}
                    <IconButton
                        href="https://www.facebook.com/profile.php?id=100008701031381"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon />
                    </IconButton>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default ContactSocialMediaHandles
