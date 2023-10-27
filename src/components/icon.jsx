import './icon.css';
import React from 'react';

import logoIcon from '../assets/icons/logo.svg';
import githubIcon from '../assets/icons/github.svg';
import dribbbleIcon from '../assets/icons/dribbble.svg';
import emailIcon from '../assets/icons/email.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const icons = {
    logo: logoIcon,
    github: githubIcon,
    dribbble: dribbbleIcon,
    email: emailIcon,
    twitter: twitterIcon,
    linkedin: linkedinIcon,
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Icon({ size = 48, logo = 'logo', clickable = null }) {
    const source = icons[logo] || logoIcon;
    const classLogo = logo === 'logo' ? 'logo' : 'icon';

    const handleClick = () => {
        if (clickable === 'scroll') {
            scrollToTop();
        } else if (clickable) {
            window.open(clickable, '_blank');
        }
    };

    const imgSize = `${size}px`;

    return (
        <a
            className={`clickable ${classLogo}`}
            onClick={handleClick}
            href={clickable === 'scroll' ? null : clickable}
            target={clickable === 'scroll' ? null : '_blank'}
            title={logo.charAt(0).toUpperCase() + logo.slice(1)}
        >
            <img src={source} width={imgSize} height={imgSize} alt={logo} />
        </a>
    );
}