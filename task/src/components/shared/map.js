import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap = (props) => {


    const defaultProps = {
        center: {
            lat: 59.955413,
            lng: 30.337844
        },
        zoom: 11
    };

    return (
        <div style={{ height: '50vh', width: '40vw' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}
export default SimpleMap