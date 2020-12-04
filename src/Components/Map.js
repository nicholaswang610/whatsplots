import React, {useState, useEffect} from 'react';
import '../Styles/Map.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import MapView from './MapView';

const defaultCoords = [34.0522, -118.2437] // Los Angeles

const ActivityMap = (props) => {
    const [userCoords, setUserCoords] = useState(defaultCoords); 

    // Private this later
    //let endpoint = "https://api.mapbox.com/styles/v1/njwang/cki5f6sml7s1i19p5xpd1l9w2/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibmp3YW5nIiwiYSI6ImNraTVmYnY1eTA0dmcydXBxMTdnbnEwMTYifQ.Ue5q9QnQewN0cltRlOxBpQ";
    
    // On load: center map at user location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let coords = [position.coords.latitude, position.coords.longitude];
            setUserCoords(coords);
        });
    }, [])

    // For view bounds
    const markerCoords = [userCoords, defaultCoords];

    return(
        <div id="map-container">
            <div id="map">
                <MapContainer center={userCoords} zoom={11} scrollWheelZoom={false}>
                    <MapView center={userCoords} zoom={11} bounds={markerCoords}></MapView>
                    <TileLayer
                        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                        url={process.env.REACT_APP_ENDPOINT}
                    />
                    <Marker position={[34.0522, -118.2437]}>
                        <Popup class="popup">
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={userCoords}>
                        <Popup class="popup">
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default ActivityMap;