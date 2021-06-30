import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DescriptionIcon from '@material-ui/icons/Description';
import ChatIcon from '@material-ui/icons/Chat';
import CreateIcon from '@material-ui/icons/Create';
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        cName: 'navText',
    },
    {
        title: 'About Me',
        path: '/about',
        icon: <EmojiPeopleIcon />,
        cName: 'navText',
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <DescriptionIcon />,
        cName: 'navText',
    },
    {
        title: 'Blogs',
        path: '/blogs',
        icon: <CreateIcon />,
        cName: 'navText',
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <ChatIcon />,
        cName: 'navText',
    },
];


