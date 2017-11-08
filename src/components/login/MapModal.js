/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Dialog, FlatButton} from 'material-ui';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap(({tienda, dragged, isMarkerShown, lat=20.134484, lng=-98.802704, markerLat=20.1324695, markerLng=-98.8009663}) =>
{
    // const googleMaps = window.google.maps;
    // const geocoder = new googleMaps.Geocoder();
    // geocoder.geocode({'location': NY},
    //     r=>console.log(r)
    // );
    // console.log(geocoder);
   return(<GoogleMap
       defaultZoom={14}
       defaultCenter={tienda}
   >
       {isMarkerShown && <Marker
           draggable={true}
           onDragEnd={dragged}
           position={tienda} />}

   </GoogleMap>);
}
));


export const MapModal = ({tienda, open=false, handleClose, onDrag}) => {

    function dragged(e){
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());
        onDrag(e);
    }

    const actions = [
        <FlatButton
            label="Cancelar"
            primary={true}
            onClick={handleClose}
        />,
        <FlatButton
            label="Guardar"
            primary={true}
            keyboardFocused={true}
            onClick={handleClose}
        />,
    ];
    return (
        <Dialog
            style={styles.dialog}
            title="Seleccióna la ubicación de tu negocio"
            modal={true}
            open={open}
            actions={actions}
            onRequestClose={handleClose}
        >
            <div style={styles.wraper}>
                <p>¿Donde está tu negocio?</p>
            <MyMapComponent
                tienda={tienda}
                dragged={dragged}
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>

        </Dialog>
    );
};

//MapModal.propTypes = {};

const styles = {
    dialog: {
        display:"inherit"
    },
    wraper:{
        minHeight:"400px"
    }
};

