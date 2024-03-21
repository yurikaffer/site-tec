import React from 'react';
import NavBar from './Navbar';

const HomeNavbar: React.FC = () => {
    return (
        <>
            <NavBar boxStyle={{
                bgcolor: 'transparent',
                padding: '5rem 10%',
                position: 'absolute',
                '@media (max-width: 1150px)': {
                    padding: '5rem 5%',
                },
            }} img='Tec logo 2024.png' heightImg='8rem' />
        </>
    )
}

export default HomeNavbar