import React from "react";
import { SocialWrapper, Link, DeveloperTitle } from "./map.style";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <>
        <GoogleMap
          defaultZoom={18}
          defaultCenter={{ lat: 54.1766044, lng: 15.5722924 }}
        >
          <Marker position={{ lat: 54.1766044, lng: 15.5722924 }} />
        </GoogleMap>

        <SocialWrapper>
          <DeveloperTitle><Link href="https://www.linkedin.com/in/marcin-scimborski-b2aa24137/">Website created by Marcin Scimborski</Link></DeveloperTitle>
        </SocialWrapper>
      </>
    );
  })
);

export default MapComponent;
