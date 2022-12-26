import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  LayersControl,
  GeoJSON,
  WMSTileLayer,
} from "react-leaflet";
import "esri-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import SPF from "../../public/data/Station_Point_Final.json";
import GOV from "../../public/data/Governorate.json";
import AREA from "../../public/data/MyArea.json";
import CONSTRUCTION from "../../public/data/Construction_projects.json";
import { map, marker, popup, CircleMarker } from "leaflet";
import VectorTileLayerUmdMin from "leaflet-vector-tile-layer";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import useSupercluster from "use-supercluster";
import { markerClusterGroup } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import VectorTileLayer from "react-esri-leaflet/plugins/VectorTileLayer";
import VectorBasemapLayer from "react-esri-leaflet/plugins/VectorBasemapLayer";

const mbUrl3 =
  "https://tiles.arcgis.com/tiles/2zwTmDUxTzTVBytU/arcgis/rest/services/KuwaitFinder3Basemap/VectorTileServer?f=jsapi&cacheKey=9919458153afac15";
const apiKey =
  "AAPK1f12d3f9f7e0446b97bd5fad297b62dfNs64weAwjHl0BHUdtKX9GisBgUj4312WkhiIHfzTuTes26tENgAO6tBOGEErF-0r";
const basemapEnum = "ArcGIS:Streets";

var wmsLayerString =
  "Sample_Data:Connection_File,Sample_Data:Station_Buildings,Sample_Data:Pipe_Line,Sample_Data:House_Pipe,Sample_Data:House_connection,Sample_Data:Manhole_Final,Sample_Data:Construction_projects_Poly,Sample_Data:Governorate,Sample_Data:Gov_Polyline,Sample_Data:Area,Sample_Data:FlowDirectionFinal";

// component
export default function Map({
  govzone,
  areazone,
  areazone1,
  govzone1,
  projectCoordinated,
  projectCoordinated1,
  projectDescription,
  projectName,
  projectPosition,
  setprojectPosition,
  construction,
  areaGov,
  setAreaGov,
}) {
  var greenIcon = L.icon({
    iconUrl: "https://i.imgur.com/ld3rkCP.png",
    iconSize: [70, 70],
    iconAnchor: [22, 94],
    popupAnchor: [0, -100],
  });

  function onEachConstruction(construction, layer) {
    const COProjectName = construction.properties.co_name_ar;
    const COProjectDescription = construction.properties.description_ar;
    const COProjectImage1 =
      "https://geo1.esmrts.com/image/" + construction.properties.image1;
    const COProjectImage2 =
      "https://geo1.esmrts.com/image/" + construction.properties.image2;
    const COProjectImage3 =
      "https://geo1.esmrts.com/image/" + construction.properties.image3;
    const COProjectImage4 =
      "https://geo1.esmrts.com/image/" + construction.properties.image4;
    const CoXY = construction.properties.coordinates;

    layer.bindPopup(
      `
      <div style="font-family: 'Tajawal', sans-serif;">
      <div style=" width:100%; float:left; background-image: url('${COProjectImage1}'); background-size: cover; padding-top: 40px; padding-bottom: 40px; background-blend-mode: overlay;  background-color: currentcolor;  image-repeat:no-repeat; margin-bottom:20px; font-weight:10px">
       <h1 style='font-size: 18px; color: white; text-align:center; padding:20px; font-weight: 700;'> ${COProjectName} </h1>
      </div>
      <br></br>
      <p style="text-align:center; padding:10px; margin-top:5px"> ${COProjectDescription}</p>
     <hr />
     <p style="text-align:center; padding:10px;">${construction.geometry.coordinates[0]}, ${construction.geometry.coordinates[1]}</p>
      <hr/>
    </div>
      `
    );
  }

  function onEachSPF(spf, layer) {
    const SPFProjectName = spf.properties.st_name_ar;
    const COProjectDescription = spf.properties.description_ar;
    const COProjectImage1 =
      "https://geo1.esmrts.com/image/" + spf.properties.image1;
    const COProjectImage2 =
      "https://geo1.esmrts.com/image/" + spf.properties.image2;
    const COProjectImage3 =
      "https://geo1.esmrts.com/image/" + spf.properties.image3;
    const COProjectImage4 =
      "https://geo1.esmrts.com/image/" + spf.properties.image4;
    layer.bindPopup(
      `
      <div style="font-family: 'Tajawal', sans-serif;" >
      <div style=" width:100%; float:left; background-image: url('${COProjectImage1}'); background-size: cover; padding-top: 40px; padding-bottom: 40px; background-blend-mode: overlay; background-color: currentcolor;  image-repeat:no-repeat; margin-bottom:20px; font-weight:10px">
       <h1 style='font-size: 18px; color: white; text-align:center; padding:20px; font-weight: 700;'> ${SPFProjectName} </h1>
      </div>
      <br></br>
      <p style="text-align:center; padding:10px; margin-top:5px"> ${COProjectDescription}</p>
     <hr />
     <p style="text-align:center; padding:10px;">${spf.geometry.coordinates}</p>
      <hr/>
    </div>
      `
    );
  }

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    useEffect(() => {
      if (areaGov === true) {
        map.flyTo([areazone, areazone1], map.getZoom());
        setPosition([areazone, areazone1]);
      } else {
        setPosition([projectCoordinated, projectCoordinated1]);
        map.flyTo([projectCoordinated, projectCoordinated1], map.getZoom());
      } 
    }, [projectCoordinated]);

    return position === null ? null : (
      <>
        <Marker position={position} icon={greenIcon}>
          <Popup>
            {areaGov ? (
              <h1 className="font-bold mt-5 p-4 font-tajwal">أنت هنا</h1>
            ) : projectPosition ? (
              <>
                <h1 className="font-bold mt-5 p-4 text-center font-tajwal">
                  {" "}
                  {projectName}
                </h1>
                <hr />
                <h1 className="font-bold mt-5 text-center p-4 font-tajwal">
                  {projectDescription}{" "}
                </h1>
              </>
            ) : (
              <h1 className="font-bold mt-5  p-4 font-tajwal">أنت هنا</h1>
            )}
          </Popup>
        </Marker>
      </>
    );
  }

  const markers = L.markerClusterGroup();
  var constructionIcon = L.icon({
    iconUrl: "https://i.imgur.com/jR1ZGvi.png",
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [0, -100],
  });
  var stationIcon = L.icon({
    iconUrl: "https://i.imgur.com/4LWG8pQ.png",
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [0, -100],
  });
  function createMarker(feature, latlng) {
    return markers.addLayer(L.marker(latlng, { icon: constructionIcon }));
  }
  function createMarkerstation(feature, latlng) {
    return markers.addLayer(L.marker(latlng, { icon: stationIcon }));
  }

  return (
    <div className=" flex relative mt-[69.38px] font-tajwal" id="map">
      <MapContainer
        center={[47.4818, 29.3117]}
        zoom={9}
        scrollWheelZoom
        className="h-screen w-full"
      >
        <LayersControl position="topright">
          <GeoJSON data={GOV} />
          <GeoJSON data={AREA} />

          {/* streetmap */}
          <LayersControl.BaseLayer radio checked name=" خرائط مفتوحة المصدر">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          {/* satelite */}
          <LayersControl.BaseLayer radio name=" صور القمر الصناعي">
            <TileLayer
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
              url="https://api.mapbox.com/styles/v1/lzahrani/clb7ov42s001q15qgj54sms68/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHphaHJhbmkiLCJhIjoiY2xiN295YzU5MGRjaDN0bGo1ZmdkbmNtdSJ9.lZ0_MSSUHq5gDmXFqbrc1Q"
            />
          </LayersControl.BaseLayer>

          {/* paci map */}
          <LayersControl.BaseLayer radio name="خريطة باسي">
            {apiKey && (
              <VectorBasemapLayer name="ArcGIS:Streets" token={apiKey} />
            )}

            <LayersControl.Overlay checked name=" طبقة خريطة الباسي">
              <VectorTileLayer url="https://tiles.arcgis.com/tiles/2zwTmDUxTzTVBytU/arcgis/rest/services/KuwaitFinder3Basemap/VectorTileServer" />
            </LayersControl.Overlay>
          </LayersControl.BaseLayer>

          {/* construction */}
          <LayersControl.Overlay
            radio
            checked
            name="مشاريع إنشائية"
            icon={greenIcon}
          >
            <GeoJSON
              data={CONSTRUCTION.features}
              onEachFeature={onEachConstruction}
              pointToLayer={function (feature, latlng) {
                return L.marker(latlng, { icon: constructionIcon });
              }}
            ></GeoJSON>
          </LayersControl.Overlay>

          <WMSTileLayer
            url="http://geo1.esmrts.com/geoserver/ows?"
            version="1.3.0"
            layers={wmsLayerString}
            format="image/png"
            height="768"
            width="677"
            zIndex={10000}
            opacity={1}
            maxZoom={24}
            transparent={true}
          />

          {/* station */}
          <LayersControl.Overlay
            radio
            checked
            name="محطات الصرف الصحي"
            icon={greenIcon}
          >
            <GeoJSON
              data={SPF.features}
              onEachFeature={onEachSPF}
              pointToLayer={function (feature, latlng) {
                return L.marker(latlng, { icon: stationIcon });
              }}
            ></GeoJSON>
          </LayersControl.Overlay>
        </LayersControl>
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
