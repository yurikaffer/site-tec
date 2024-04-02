
import React from 'react';
import NavBar from './Navbar';

const SubNavbar: React.FC = () => {
    return (
        <>
            <NavBar boxStyle={{
                bgcolor: '#FFF',
                padding: '1rem 10%',
                position: 'fixed',
                boxShadow: '0 1px 0px 0 rgba(0, 0, 0, 0.1)',
            }} img='logo-nav.png' heightImg='3.5rem' smButtons={true} maxWidthImg='10rem'
            />
        </>
    );
}

export default SubNavbar;