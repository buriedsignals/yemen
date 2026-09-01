import { useRef, useEffect } from "react";
import * as Style from "./MapBox.syles";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import useStore from "@/helpers/store";

const MAPTILER_KEY = "aeGatHIJDM8d2AdRAEX1";
const STYLE_URL = `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${MAPTILER_KEY}`;
const GEOJSON_URL = "/jsons/yemen.geojson";

const COLOR_LAND = "hsl(185, 0%, 18%)";
const COLOR_WATER = "hsl(185, 0%, 14%)";
const COLOR_WATER_SHADOW = "hsl(185, 0%, 4%)";

const YEMEN_BOUNDS = [
  [42.391379, 12.922259],
  [47.042428, 17.525166],
];

export default function MapBox() {
  const [mapFilterDate] = useStore((state) => [state.mapFilterDate]);
  const mapRef = useRef(null);
  const map = useRef(null);
  const hoveredId = useRef(null);

  useEffect(() => {
    if (!map.current || !map.current.getLayer("yemen")) return;
    const date = useStore.getState().mapFilterDate;
    const filter =
      date && date !== "All" ? ["==", ["get", "years"], String(date)] : null;
    map.current.setFilter("yemen", filter);
  }, [mapFilterDate]);

  useEffect(() => {
    if (map.current) map.current.resize();
  }, [useStore.getState().openPopup]);

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapRef.current,
      style: STYLE_URL,
      bounds: YEMEN_BOUNDS,
      fitBoundsOptions: { padding: 40 },
    });
    map.current.dragRotate.disable();
    map.current.touchZoomRotate.disableRotation();
    map.current.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );

    map.current.on("load", () => {
      for (const layer of map.current.getStyle().layers) {
        if (layer.type === "background") {
          map.current.setPaintProperty(
            layer.id,
            "background-color",
            COLOR_LAND
          );
        } else if (layer.id === "Water") {
          map.current.setPaintProperty(layer.id, "fill-color", COLOR_WATER);
        } else if (layer.id === "Water shadow") {
          map.current.setPaintProperty(
            layer.id,
            "fill-color",
            COLOR_WATER_SHADOW
          );
        }
      }

      map.current.addSource("yemen-src", {
        type: "geojson",
        data: GEOJSON_URL,
        generateId: true,
      });

      map.current.addLayer({
        id: "yemen",
        type: "circle",
        source: "yemen-src",
        paint: {
          "circle-color": "#5f655a",
          "circle-stroke-color": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            "#ff0000",
            "#ffffff",
          ],
          "circle-stroke-width": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            3,
            2,
          ],
          "circle-radius": [
            "match",
            ["get", "fatalities"],
            [
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "40",
              "41",
              "42",
              "44",
              "46",
              "48",
              "49",
              "50",
              "47",
            ],
            10,
            [
              "51",
              "53",
              "54",
              "55",
              "60",
              "70",
              "88",
              "90",
              "91",
              "100",
              "113",
              "130",
              "131",
            ],
            15,
            5,
          ],
        },
      });

      const date = useStore.getState().mapFilterDate;
      if (date && date !== "All") {
        map.current.setFilter("yemen", ["==", ["get", "years"], String(date)]);
      }
    });

    map.current.on("mousemove", "yemen", (event) => {
      map.current.getCanvas().style.cursor = "pointer";
      if (!event.features.length) return;
      const id = event.features[0].id;
      if (hoveredId.current === id) return;
      if (hoveredId.current !== null) {
        map.current.setFeatureState(
          { source: "yemen-src", id: hoveredId.current },
          { hover: false }
        );
      }
      hoveredId.current = id;
      map.current.setFeatureState({ source: "yemen-src", id }, { hover: true });
    });

    map.current.on("mouseleave", "yemen", () => {
      map.current.getCanvas().style.cursor = "";
      if (hoveredId.current !== null) {
        map.current.setFeatureState(
          { source: "yemen-src", id: hoveredId.current },
          { hover: false }
        );
      }
      hoveredId.current = null;
    });

    map.current.on("click", (event) => {
      setTimeout(() => {
        map.current.resize();
      }, 0);
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["yemen"],
      });
      if (!features.length) {
        useStore.setState({ openPopup: false });
        map.current.resize();
        return;
      }
      const feature = features[0];
      const coordinates = feature.geometry.coordinates.slice();
      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      useStore.setState({
        openPopup: true,
        popupProperties: feature.properties,
      });
      setTimeout(() => {
        map.current.flyTo({ center: coordinates });
      }, 0);
    });
  }, []);

  return (
    <>
      <Style.MapContainer ref={mapRef} />
    </>
  );
}
