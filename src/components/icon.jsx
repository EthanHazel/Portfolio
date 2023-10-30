import React, { useEffect, useState } from 'react';
import './icon.css';

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

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Icon({ size = 1.5, logo = 'logo', clickable = null }) {
    const source = icons[logo] || logoIcon;
    const classLogo = logo === 'logo' ? 'logo' : 'icon';
    const [imgSize, setImgSize] = useState((size * document.documentElement.clientHeight) / 100);

    const classString = `${classLogo} ${clickable ? 'clickable' : ''}`;

    const handleClick = () => {
        if (clickable === 'scroll') {
            scrollToTop();
        } else if (clickable) {
            window.open(clickable, '_blank');
        }
    };

    const updateImgSize = () => {
        setImgSize((size * document.documentElement.clientHeight) / 100);
    };

    useEffect(() => {
        window.addEventListener('resize', updateImgSize);

        return () => {
            window.removeEventListener('resize', updateImgSize);
        };
    }, [size]);

    return (
        <a
            className={classString}
            onClick={handleClick}
            href={clickable === 'scroll' ? null : clickable}
            target={clickable ? '_blank' : null}
            title={capitalizeFirstLetter(logo)}
        >
            <img src={source} width={imgSize} height={imgSize} alt={logo} />
        </a>
    );
}
