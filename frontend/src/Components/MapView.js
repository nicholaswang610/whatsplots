import {useMap} from 'react-leaflet';

// Component to set the map view 
const MapView = (props) => {
    const map = useMap();
    map.setView(props.center, props.zoom);
    map.fitBounds(props.bounds);
    return null;
}

export default MapView;