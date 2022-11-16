import React from "react";
import { PARTNERS } from "../constants/partners";
import useSortedPartners from "../hooks/useSortedPartners";
import GoogleMapReact from "google-map-react";
import PartnerBallon from "./PartnerBallon";

const defaultProps = {
  center: {
    lat: 42.6665921,
    lng: 23.351723,
  },
  zoom: 12,
};

const GoogleMap = () => {
  const sortedPartners = useSortedPartners(PARTNERS);
  return (
    <div className="h-screen md:w-[50%]">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {sortedPartners?.map((partner) => {
          return (
            <PartnerBallon
              key={partner.id}
              lat={partner.latitude}
              lng={partner.longitude}
              distance={partner.distance}
              fullName={partner.fullName}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
