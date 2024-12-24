"use client";

import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import geojsonData from "./data/kazakhstan.json";

export const MapComponent = () => {
  const onEachRegion = (region, layer) => {
    const name = region.properties.name;
    if (name) {
      layer.bindPopup(`<strong>${name}</strong>`);
    }

    // Add 3D effect with custom class
    layer.setStyle({
      className: "region-3d",
      color: "#ffffff", // Border color
      weight: 1,
      fillColor: "#444444",
      fillOpacity: 1,
    });

    layer.on("mouseover", () => {
      layer.setStyle({
        fillColor: "#9A65F5",
      });
    });

    layer.on("mouseout", () => {
      layer.setStyle({
        fillColor: "#444444",
      });
    });
  };

  return (
    <div className="relative h-full w-full border-transparent focus:border-transparent focus:outline-none focus:ring-0">
      <MapContainer
        className="h-full w-full !bg-transparent [&_.leaflet-tile-pane]:hidden [&_.region-3d]:drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)]"
        bounds={[
          [40.568, 46.491],
          [55.385, 87.315],
        ]}
        zoomControl={false} // Disable zoom buttons
        scrollWheelZoom={false} // Disable zoom on scroll
        dragging={false} // Disable dragging
        doubleClickZoom={false} // Disable zoom on double-click
        attributionControl={false} // Optional: Remove attribution
      >
        <GeoJSON data={geojsonData.features} onEachFeature={onEachRegion} />
      </MapContainer>
    </div>
  );
};
