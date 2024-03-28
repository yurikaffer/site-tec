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
            }} img='tec-logo-cut.png' heightImg='6rem' />
        </>
    )
}

export default HomeNavbar