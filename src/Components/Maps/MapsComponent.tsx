import React from 'react';
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';
import '../../styles.css';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    zIndex: 5,
};

const center = {
    lat: -26.341688,
    lng: -48.818005
};

const options = {
    streetViewControl: false,
};

const MapsComponent: React.FC = () => {
    return (
        <div className="mapContainer">
            <LoadScript googleMapsApiKey='' >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    options={options}
                >

                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapsComponent

