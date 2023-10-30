import React, { useState, useEffect } from 'react';
import Icon from './icon.jsx';

import './header.css';

export default function Header() {
    const [showBoxShadow, setShowBoxShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.innerHeight + Math.round(window.scrollY), document.body.offsetHeight);
            if (window.scrollY > 0) {
                if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                    setShowBoxShadow(false);
                } else {
                    setShowBoxShadow(true);
                }
            } else {
                setShowBoxShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClasses = `header ${showBoxShadow ? '' : 'no-box-shadow'}`;

    return (
        <>
            <div className='color' />
            <div className={headerClasses + ' header'}>
                <div className='headerLeft'>
                    <Icon logo='logo' size={36} clickable='scroll' />
                    <div className='headerLinks'>
                        <a href='./index.html' className='current'>Home</a>
                        <a href='#'>Resume</a>
                        <a href='https://github.com/EthanHazel/Portfolio'>Source</a>
                    </div>
                </div>
                <div className='headerRight'>
                    <Icon logo='dribbble' size={20} clickable='https://dribbble.com/ethanhazel' />
                    <Icon logo='twitter' size={20} clickable='https://x.com/EthanHazelGD' />
                    <Icon logo='github' size={20} clickable='https://github.com/EthanHazel' />
                    <Icon logo='linkedin' size={20} clickable='https://www.linkedin.com/in/ethan-hazel/' />
                </div>
            </div>
        </>
    )
}