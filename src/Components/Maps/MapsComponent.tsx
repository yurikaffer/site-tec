import React from 'react';
import { GoogleMap, Marker, useJsApiLoader   } from '@react-google-maps/api';
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
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="mapContainer">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    options={options}
                >
                    <Marker animation={window.google.maps.Animation.DROP} position={center} />
                </GoogleMap>
        </div>
    )
}

export default React.memo(MapsComponent)