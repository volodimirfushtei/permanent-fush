// components/Map.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Кастомна іконка маркера (бо Next.js іноді ламає дефолтні шляхи)

const pinSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
  <defs>
    <radialGradient id="pinGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF5E5E"/>
      <stop offset="100%" stop-color="#D80000"/>
    </radialGradient>
  </defs>
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="url(#pinGradient)"/>
  <circle cx="12" cy="9" r="3" fill="white"/>
</svg>
`;

export const customPin = L.divIcon({
    html: pinSvg,
    className: "",          // обов'язково порожній, щоб не отримати default leaflet class
    iconSize: [40, 40],
    iconAnchor: [20, 40],  // точка, де "тримається" pin
    popupAnchor: [0, -35],
});

export default function Map() {
    return (
        <MapContainer
            center={[48.9415463, 24.6972177]} // Івано-Франківськ
            zoom={13}
            style={{ height: "260px", width: "100%", borderRadius: "16px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                opacity={0.9}
            />
            <Marker position={[48.9415463, 24.6972177]} icon={customPin}>
                <Popup>Івано-Франківськ📍</Popup>
            </Marker>
        </MapContainer>
    );
}

