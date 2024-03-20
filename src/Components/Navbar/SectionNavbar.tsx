import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';

const homeNavbar = {
    bgcolor: 'transparent',
    padding: '5rem 10%',
    position: 'absolute',
    '@media (max-width: 1150px)': {
        padding: '5rem 5%',
    },
}

const SectionNavbar: React.FC = () => {
    const [showSubNavbar, setShowSubNavbar] = useState(false);

    const subNavbar = {
        bgcolor: '#FCFCFC',
        padding: '1rem 10%',
        position: 'fixed',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        transform: showSubNavbar ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s ease-out, display 0.5s ease-out',
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowSubNavbar(currentScrollY > 170);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <NavBar boxStyle={homeNavbar} img='Tec logo 2024.png' heightImg='8rem' />
        </>
    )
}

export default SectionNavbar