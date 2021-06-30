import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { SidebarData } from '../data/SidebarData';
import { Theme } from './Theme';
import { ThemeProvider } from '@material-ui/core';
import Logo from '../images/mylogo.png';
import SocialMediaHandle from './SocialMediaHandle';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        
            <ThemeProvider theme={Theme}>
                <div className="navbar">
                    <Link to="#" className="menuBars">
                        <MenuIcon onClick={showSidebar} fontSize="large" />
                    </Link>
                    <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
                        <ul className="navMenuItems" onClick={showSidebar}>
                            <li className="navbarToggle">
                                <Link to="#">
                                    <CancelIcon />
                                </Link>
                            </li>
                            <div className="introMobile">
                                <div className="logo">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div className="intro">
                                    <h1>Shivam</h1>
                                    <p>Programmer</p>
                                </div>
                            </div>

                            {SidebarData.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={item.cName}
                                        onClick={showSidebar}
                                    >
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                            <div className="socialMediaHandle">
                                <SocialMediaHandle />
                            </div>
                        </ul>
                    </nav>
                </div>
            </ThemeProvider>

    );
};

export default Navbar;
