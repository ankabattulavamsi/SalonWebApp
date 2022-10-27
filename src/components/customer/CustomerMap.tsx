/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { useStyles } from "./Map.Styles";
import { MarkerData } from "../../utils/data/nearByMap/nearByMap";
import L from "leaflet";
import markerIcon from "../../assets/images/Maps/markerMap.png";
import markerShadow from "../../assets/images/Maps/marker-shadow.png";

const CustomerMap = () => {
  var goldIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [30, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [21, 21],
  });
  const classes = useStyles();
  return (
    <Box sx={{ mb: 10 }}>
      <MapContainer
        center={[19.15790940106618, 77.31012223449918]}
        zoom={13}
        className={classes.map}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[19.15790940106618, 77.31012223449918]} /> */}
        {MarkerData.map((item, index) => {
          return (
            <Marker key={index} position={item.loc} icon={goldIcon}>
              <Popup className={classes.mapTooltip}>
                <Typography variant="h3">{item.text}</Typography>
                <Typography variant="h6" color="primary.main">
                  {item.distance}
                </Typography>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Box>
  );
};

export default CustomerMap;
