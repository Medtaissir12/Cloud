import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const apiKey = "AIzaSyBtsK8EOOUw2zMeQjrSfuSoAO-kOXwm7hU";

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
