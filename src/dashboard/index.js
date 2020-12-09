import React, { Fragment, useEffect } from "react";
import { compose, withProps } from "recompose";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


function Dashboard() {
       useEffect(()=> {
        delayedShowMarker();
       }, []);

      const delayedShowMarker = () => {
      }

      const handleMarkerClick = () => {
        delayedShowMarker()
      }
      const MyMapComponent = compose(
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `400px` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )((props) => {
        return <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
       });

    return(
        <Fragment>
            <MyMapComponent 
                isMarkerShown= {true  }
                onMarkerClick={handleMarkerClick}
            />
        </Fragment>
    )
}

export default Dashboard;