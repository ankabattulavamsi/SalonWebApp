// /** @format */

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MarkerData } from "../../utils/data/nearByMap/nearByMap";
import { Box, Typography } from "@mui/material";
import markerIcon from "../../assets/images/Maps/markerMap.png";
import markerShadow from "../../assets/images/Maps/marker-shadow.png";
import { useStyles } from "./Map.Styles";
import { useNavigate } from "react-router-dom";
export default function CustomerMap() {
  const classes = useStyles();
  function LocationMarker(): any {
    const navigate = useNavigate();
    const [position, setPosition] = useState<any>(null);
    console.log(position, "position");

    const map = useMap();
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        var markerOptions = {
          title: "MyLocation",
          icon: customIcon,
        };
        var marker = new L.Marker(e.latlng, markerOptions);
        marker.addTo(map);
      });
    }, [map]);
    var customIcon = new L.Icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
    });
    var goldIcon = new L.Icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [30, 35],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [21, 21],
    });


    const data = MarkerData.map((item, index) => {
      return (
        <Marker
          key={index}
          position={item.loc}
          icon={goldIcon}
          eventHandlers={{
            click: (_e) => {
              navigate("/customer/salonNearby");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
                /* you can also use 'auto' behaviour
                 in place of 'smooth' */
              });
            },
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            },
          }}
        >
          <Popup className={classes.mapTooltip}>
            <Typography variant="h3">{item.text}</Typography>
            <Typography variant="h6" color="primary.main">
              {item.distance}
            </Typography>
          </Popup>
        </Marker>
      );
    });

    return position === null ? null : data;
  }

  return (
    <Box sx={{ mb: 10 }}>
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={13}
        className={classes.map}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </Box>
  );
}
