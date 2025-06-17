"use client";

import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, useMap, Tooltip, Marker } from "react-leaflet";
import geojsonData from "./data/kazakhstan.json";
import { Icon } from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { institutionService } from "@/lib/api-service";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import coordinates from "./data/coordinates.json";

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

  const { data: institutions, isLoading } = useQuery({
    queryKey: ["institutions"],
    queryFn: institutionService.getInstitutions,
  });

  return (
    <div className="flex h-full w-full max-md:flex-col max-md:gap-4 md:relative">
      <h1 className="text-white md:absolute md:left-0 md:top-0 md:z-10 md:mb-6 md:text-3xl">
        Филиалы
      </h1>
      <div className="relative h-full w-full md:h-[560px]">
        <Card className="w-full rounded-xl border border-white/20 bg-[#1C1C1D]/[15%] backdrop-blur-sm md:absolute md:left-0 md:top-1/2 md:z-20 md:max-w-md md:-translate-y-1/2 md:!rounded-3xl">
          {isLoading && (
            <div className="flex h-[170px] items-center justify-center text-center text-sm text-zinc-400 md:h-[326px]">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            </div>
          )}
          {!isLoading && institutions && (
            <ScrollArea className="h-[170px] md:h-[326px]">
              <CardContent className="p-4 md:p-6">
                <ul className="space-y-4">
                  {institutions.map(({ name, bin }, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-2 shrink-0 rounded-full bg-primary-green"></div>
                        <div>
                          <p className="text-sm text-white md:text-base">
                            {name}
                          </p>
                          <p className="text-xs text-[#898989] md:text-sm">
                            {bin}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          )}
        </Card>
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
          {!isLoading &&
            institutions &&
            coordinates.map((loc, index) => (
              <CustomMarker
                key={index}
                title={loc.name}
                position={[loc.coordinates.latitude, loc.coordinates.longitude]}
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
