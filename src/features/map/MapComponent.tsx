"use client";

import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, useMap, Tooltip, Marker } from "react-leaflet";
import geojsonData from "./data/kazakhstan.json";
import { Icon } from "leaflet";
import { MapCard } from "./MapCard";

const locations = [
  { name: "Центральный аппарат", city: "г. Астана", count: 11, coordinates: [51.1694, 71.4491] },
  { name: "Сигнал", city: "г. Уральск", count: 47, coordinates: [51.227, 51.318] },
  { name: "Комета", city: "г. Алматы", count: 35, coordinates: [43.222, 76.8512] },
  { name: "Новая Энергия", city: "г. Шымкент", count: 20, coordinates: [42.3417, 69.5901] },
  { name: "Северный Ветер", city: "г. Караганда", count: 15, coordinates: [49.8019, 73.0878] },
  { name: "Светлый Мир", city: "г. Павлодар", count: 18, coordinates: [52.2868, 76.9456] },
  { name: "Золотой Путь", city: "г. Костанай", count: 22, coordinates: [53.2144, 63.6264] },
  { name: "Горизонт", city: "г. Атырау", count: 25, coordinates: [47.0969, 51.9003] },
  { name: "Лидер", city: "г. Семей", count: 30, coordinates: [50.4417, 80.2222] },
];

const markerIcon = new Icon({
  iconUrl: "/marker.svg",
  iconSize: [40, 40],
});

const mapCenter = [48.5196, 66.9237];

const initialMaxBounds: [[number, number], [number, number]] = [
  [40.568, 20.491],
  [55.385, 120.315]
];

const zoomFourBounds: [[number, number], [number, number]] = [
  [42.568, 40.491], // New bounds for zoom 4
  [55.385, 90.315],
];

const DynamicZoomHandler = ({ setMaxBounds }: { setMaxBounds: React.Dispatch<React.SetStateAction<[[number, number], [number, number]]>> }) => {
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

const CustomMarker = ({ position, title }: { position: [number, number]; title: string }) => {
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
  const [maxBounds, setMaxBounds] = useState<[[number, number], [number, number]]>(initialMaxBounds);

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
    <div className="relative md:h-[560px] h-full w-full">
      <MapCard locations={locations} />
      <MapContainer
        className="focus:ring-0 relative z-10 max-md:h-[290px] md:h-[560px] h-full w-full !bg-transparent"
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
        {locations.map((loc, index) => (
          <CustomMarker
            key={index}
            title={loc.name}
            position={loc.coordinates}
          />
        ))}
        <DynamicZoomHandler setMaxBounds={setMaxBounds} />
        <GeoJSON data={geojsonData.features} onEachFeature={onEachRegion} />
      </MapContainer>
    </div>
  );
};