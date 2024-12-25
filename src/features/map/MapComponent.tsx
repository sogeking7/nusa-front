"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect } from "react";
import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import geojsonData from "./data/kazakhstan.json";
import { cn } from "@/lib/utils";

// Custom component to dynamically set zoom
const DynamicZoomHandler = () => {
  const map = useMap();

  useEffect(() => {
    const updateZoom = () => {
      if (window.innerWidth < 768) {
        map.setZoom(4); // Smaller zoom for smaller screens
      } else {
        map.setZoom(5); // Default zoom
      }
    };

    updateZoom(); // Initial call
    window.addEventListener("resize", updateZoom); // Add event listener

    return () => {
      window.removeEventListener("resize", updateZoom); // Cleanup listener
    };
  }, [map]);

  return null; // This component doesn't render anything visible
};

export const MapComponent = () => {
  const onEachRegion = (region, layer) => {
    const name = region.properties.name;
    if (name) {
      layer.bindPopup(`<strong>${name}</strong>`);
    }

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
    <div
      className={cn(
        "relative border-b border-b-white/20 max-h-[360px]  md:max-h-[560px] h-full w-full",
        // "min-[1080px]:scale-90"
      )}
    >
      <Card className="absolute left-0 top-1/2 z-[1000] w-full max-w-xs -translate-y-1/2 !rounded-3xl border border-white/20 bg-[#1C1C1D]/[15%] backdrop-blur-sm">
        <CardContent className="p-6">
          <ul className="space-y-4">
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Центральный аппарат</p>
                  <p className="text-sm text-[#898989]">г. Астана</p>
                </div>
              </div>
              <p className="text-primary-purple">11</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Сигнал</p>
                  <p className="text-sm text-[#898989]">г. Уральск</p>
                </div>
              </div>
              <p className="text-primary-purple">47</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Комета</p>
                  <p className="text-sm text-[#898989]">г. Алматы</p>
                </div>
              </div>
              <p className="text-primary-purple">35</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Стрела</p>
                  <p className="text-sm text-[#898989]">г. Уштобе</p>
                </div>
              </div>
              <p className="text-primary-purple">35</p>
            </li>
            <li className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                <div>
                  <p className="text-base text-white">Автоматика</p>
                  <p className="text-sm text-[#898989]">г. Астана</p>
                </div>
              </div>
              <p className="text-primary-purple">29</p>
            </li>
          </ul>
        </CardContent>
      </Card>
      <MapContainer
        className="h-full w-full !bg-transparent [&_.leaflet-tile-pane]:hidden [&_.region-3d]:drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)]"
        center={[48.5196, 66.9237]} // Center for Kazakhstan
        zoom={5} // Initial zoom level
        zoomControl={false} // Disable zoom buttons
        scrollWheelZoom={true} // Enable zoom on scroll
        dragging={true} // Enable dragging
        doubleClickZoom={false} // Disable zoom on double-click
        attributionControl={false} // Optional: Remove attribution
        maxZoom={5}
        minZoom={4}
        maxBounds={[
          [40.568, 20.491], // Expanded southwest corner (latitude, longitude)
          [55.385, 120.315], // Expanded northeast corner (latitude, longitude)
        ]} // Horizontal expansion for dragging space
        maxBoundsViscosity={0.3} // Add some resistance to dragging beyond bounds
      >
        <DynamicZoomHandler /> {/* Custom zoom handler */}
        <GeoJSON data={geojsonData.features} onEachFeature={onEachRegion} />
      </MapContainer>
    </div>
  );
};
