"use client";

import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, useMap, Tooltip, Marker } from "react-leaflet";
import geojsonData from "./data/kazakhstan.json";
import { Icon } from "leaflet";
import { MapCard } from "./MapCard";
import { MOCK_MAP_LOCATIONS } from "@/features/map/mock";

const markerIcon = new Icon({
  iconUrl: "/marker.svg",
  iconSize: [40, 40],
});

const mapCenter: [number, number] = [48.5196, 66.9237];

const initialMaxBounds: [[number, number], [number, number]] = [
  [40.568, 20.491],
  [55.385, 120.315],
];

const zoomFourBounds: [[number, number], [number, number]] = [
  [42.568, 40.491], // New bounds for zoom 4
  [55.385, 90.315],
];

const DynamicZoomHandler = ({
  setMaxBounds,
}: {
  setMaxBounds: React.Dispatch<
    React.SetStateAction<[[number, number], [number, number]]>
  >;
}) => {
  const map = useMap();

  useEffect(() => {
    const updateZoom = () => {
      if (window.innerWidth < 992) {
        map.setZoom(4);
        map.setMaxBounds(zoomFourBounds);
        setMaxBounds(zoomFourBounds);
      } else {
        map.setZoom(5);
        map.setMaxBounds(initialMaxBounds);
        setMaxBounds(initialMaxBounds);
      }
    };

    updateZoom();
    window.addEventListener("resize", updateZoom);

    return () => {
      window.removeEventListener("resize", updateZoom);
    };
  }, [map, setMaxBounds]);

  return null;
};

const CustomMarker = ({
  position,
  title,
}: {
  position: [number, number];
  title: string;
}) => {
  return (
    <Marker position={position} icon={markerIcon}>
      <Tooltip>{title}</Tooltip>
    </Marker>
  );
};

const onEachRegion = (region, layer) => {
  const name = region.properties.name;

  if (name) {
    layer.bindPopup(`<strong>${name}</strong>`);
  }

  const defaultStyle = {
    color: "#ffffff",
    weight: 1,
    fillColor: "#444444",
    fillOpacity: 1,
  };

  const hoverStyle = { fillColor: "#9A65F5" };

  layer.setStyle(defaultStyle);

  layer.on("mouseover", () => layer.setStyle(hoverStyle));
  layer.on("mouseout", () => layer.setStyle(defaultStyle));
};

export const MapComponent = () => {
  const [maxBounds, setMaxBounds] =
    useState<[[number, number], [number, number]]>(initialMaxBounds);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMaxBounds(zoomFourBounds);
      } else {
        setMaxBounds(initialMaxBounds);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-full w-full max-md:flex-col max-md:gap-4 md:relative">
      <h1 className="text-white md:absolute md:left-0 md:top-0 md:z-10 md:mb-6 md:text-3xl">
        Филиалы
      </h1>
      <div className="relative h-full w-full md:h-[560px]">
        <MapCard locations={MOCK_MAP_LOCATIONS} />
        <MapContainer
          className="relative z-10 h-full w-full !bg-transparent focus:ring-0 max-md:h-[290px] md:h-[560px]"
          center={mapCenter}
          zoom={5}
          zoomControl={false}
          scrollWheelZoom
          dragging
          doubleClickZoom={false}
          attributionControl={false}
          maxZoom={5}
          minZoom={4}
          maxBounds={maxBounds}
          maxBoundsViscosity={0.3}
        >
          {MOCK_MAP_LOCATIONS.map((loc, index) => (
            <CustomMarker
              key={index}
              title={loc.name}
              position={loc.coordinates}
            />
          ))}
          <DynamicZoomHandler setMaxBounds={setMaxBounds} />
          {/* @ts-ignore */}
          <GeoJSON data={geojsonData.features} onEachFeature={onEachRegion} />
        </MapContainer>
      </div>
    </div>
  );
};
