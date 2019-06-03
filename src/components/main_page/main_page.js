import React from "react";
import Header from "../header/header";
import Offer from "../offer/offer";
import Contact from "../contact/contact";
import MapComponent from "../map/map";

const mainPage = () => {
  return (
    <>
      <Header />
      <Offer />
      <Contact />
      <MapComponent
        isMarkerShown
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_o5CnKTuXDRpiaKKxvNBnWSUeV2FU17M&libraries=geometry,drawing,places"
        }
      />
    </>
  );
};

export default mainPage;
