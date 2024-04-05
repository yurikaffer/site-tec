import React from 'react';
import { useMediaQueryContext } from '../../../Context/MediaQueryContext';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import DesktopNavbar from '../DesktopNavbar/DesktopNavbar';

const SectionNavbar: React.FC = () => {
    const {isMobile} = useMediaQueryContext();

    return (
        <>
            {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
        </>
    )
}

export default SectionNavbar

