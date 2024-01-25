import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";

const Maps = () => {
  useEffect(() => {
    const existingMap = L.DomUtil.get("map");
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }
    const map = L.map("map").setView([37.7749, -122.4194], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    L.marker([37.7749, -122.4194])
      .addTo(map)
      .bindPopup("Marker Title")
      .openPopup();
  }, []);

  return <div id="map" className="map-cont"></div>;
};

export default Maps;
