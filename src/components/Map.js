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

// component
export default function Map({
  areazone,
  areazone1,
  projectCoordinated,
  projectCoordinated1,
  projectDescription,
  projectName,
  projectPosition,
  areaGov,
  proImage,
  govid
}) {
  const apiKey =
    "AAPK1f12d3f9f7e0446b97bd5fad297b62dfNs64weAwjHl0BHUdtKX9GisBgUj4312WkhiIHfzTuTes26tENgAO6tBOGEErF-0r";
  var wmsLayerString =
    "Sample_Data:Connection_File,Sample_Data:Station_Buildings,Sample_Data:Pipe_Line,Sample_Data:House_Pipe,Sample_Data:House_connection,Sample_Data:Manhole_Final,Sample_Data:Construction_projects_Poly,Sample_Data:Governorate,Sample_Data:Gov_Polyline,Sample_Data:Area,Sample_Data:FlowDirectionFinal";

  var greenIcon = L.icon({
    iconUrl: "https://i.imgur.com/ld3rkCP.png",
    iconSize: [70, 70],
    iconAnchor: [15, 40],
    popupAnchor: [30, -30],
  });
  var constructionIcon = L.icon({
    iconUrl: "https://i.imgur.com/jR1ZGvi.png",
    iconSize: [30, 30],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
  });
  var stationIcon = L.icon({
    iconUrl: "https://i.imgur.com/4LWG8pQ.png",
    iconSize: [30, 30],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
  });


  
  const innerBounds = [
    // Governertes
    {
      id: "0",
      coordinates: [
        [29.09761931, 47.73245187],
        [29.97594744, 47.1889171],
      ],
    },
    {
      id: "1",
      coordinates: [
        [28.55926626, 48.38977797],
        [29.17495179, 47.80978435],
      ],
    },
    {
      id: "2",
      coordinates: [
        [29.27912757, 48.07948138],
        [29.33881734, 48.00965907],
      ],
    },
    {
      id: "3",
      coordinates: [
        [29.19525157, 48.10089653],
        [29.25886745, 47.99918944],
      ],
    },
    {
      id: "4",
      coordinates: [
        [29.31660408, 47.99917457],
        [29.37320858, 47.81151523],
      ],
    },
    {
      id: "5",
      coordinates: [
        [29.19346697, 47.98311321],
        [29.30074596, 47.87640926],
      ],
    },

    // Areas
    {
      id: "6",
      coordinates: [
        [29.28929687, 47.94541866],
        [29.30303394, 47.96596248],
      ],
    },
    {
      id: "7",
      coordinates: [
        [29.26606567, 47.86431817],
        [29.27866779, 47.90789709],
      ],
    },
    {
      id: "8",
      coordinates: [
        [29.26572874, 47.96746912],
        [29.28393225, 47.98787607],
      ],
    },
    {
      id: "9",
      coordinates: [
        [29.26709886, 47.90554815],
        [29.30057915, 47.92830209],
      ],
    },
    {
      id: "10",
      coordinates: [
        [29.28844607, 47.92757538],
        [29.30179651, 47.94780645],
      ],
    },
    {
      id: "11",
      coordinates: [
        [29.27970607, 47.92725744],
        [29.28929687, 47.94959916],
      ],
    },
    {
      id: "12",
      coordinates: [
        [29.24436736, 47.86431801],
        [29.2676381, 47.93073736],
      ],
    },
    {
      id: "13",
      coordinates: [
        [29.17956168, 47.92907655],
        [29.26603096, 48.00779458],
      ],
    },
    {
      id: "14",
      coordinates: [
        [29.25582842, 47.95213167],
        [29.26613739, 47.97181485],
      ],
    },
    {
      id: "15",
      coordinates: [
        [29.29510298, 47.85266268],
        [29.31091561, 47.86569507],
      ],
    },
    {
      id: "16",
      coordinates: [
        [29.27525709, 47.87873042],
        [29.29870586, 47.90698505],
      ],
    },
    {
      id: "17",
      coordinates: [
        [29.29552088, 47.86476695],
        [29.31061476, 47.90575734],
      ],
    },
    {
      id: "18",
      coordinates: [
        [29.23931421, 47.90789709],
        [29.26742405, 47.95766118],
      ],
    },
    {
      id: "19",
      coordinates: [
        [29.2259574, 47.86027392],
        [29.26605431, 47.94022735],
      ],
    },
    {
      id: "20",
      coordinates: [
        [29.31433433, 48.03278653],
        [29.35601991, 48.10349414],
      ],
    },
    {
      id: "21",
      coordinates: [
        [29.28393256, 47.9791841],
        [29.30544324, 48.00301098],
      ],
    },
    {
      id: "22",
      coordinates: [
        [29.28806026, 47.99954099],
        [29.30749875, 48.02945332],
      ],
    },
    {
      id: "23",
      coordinates: [
        [29.27693322, 48.00220287],
        [29.29067563, 48.03503714],
      ],
    },
    {
      id: "24",
      coordinates: [
        [29.26460486, 47.98551373],
        [29.28568538, 48.014007],
      ],
    },
    {
      id: "25",
      coordinates: [
        [29.26441178, 48.01271826],
        [29.28004487, 48.04232162],
      ],
    },
    {
      id: "26",
      coordinates: [
        [29.26439519, 48.05171172],
        [29.29350465, 48.0848221],
      ],
    },
    {
      id: "27",
      coordinates: [
        [29.27981234, 48.02241272],
        [29.31433433, 48.06944387],
      ],
    },
    {
      id: "28",
      coordinates: [
        [29.26884403, 48.06104709],
        [29.30960593, 48.09288165],
      ],
    },
    {
      id: "29",
      coordinates: [
        [29.30416538, 48.05304003],
        [29.32590045, 48.09459092],
      ],
    },
    {
      id: "30",
      coordinates: [
        [29.33811796, 48.01344034],
        [29.36330315, 48.04930051],
      ],
    },
    {
      id: "31",
      coordinates: [
        [29.32293574, 48.00065566],
        [29.3498032, 48.03965363],
      ],
    },
    {
      id: "32",
      coordinates: [
        [29.30749875, 48.01228411],
        [29.33088505, 48.05304003],
      ],
    },
    {
      id: "33",
      coordinates: [
        [29.26439523, 48.03503714],
        [29.2849417, 48.05689945],
      ],
    },
    {
      id: "34",
      coordinates: [
        [29.34573346, 47.79272264],
        [29.48965516, 48.44296554],
      ],
    },
    {
      id: "35",
      coordinates: [
        [29.35881608, 47.95666356],
        [29.37991288, 47.9825627],
      ],
    },
    {
      id: "36",
      coordinates: [
        [29.36573628, 47.99645961],
        [29.38262293, 48.01495954],
      ],
    },
    {
      id: "37",
      coordinates: [
        [29.33199344, 47.94568372],
        [29.34893959, 47.97251778],
      ],
    },
    {
      id: "38",
      coordinates: [
        [29.30408554, 47.97463331],
        [29.3206285, 47.99954099],
      ],
    },
    {
      id: "39",
      coordinates: [
        [29.31855618, 47.97130309],
        [29.33496595, 47.99331696],
      ],
    },
    {
      id: "40",
      coordinates: [
        [29.30544324, 47.99331696],
        [29.32293574, 48.02241272],
      ],
    },
    {
      id: "41",
      coordinates: [
        [29.3206285, 47.98743957],
        [29.34046899, 48.01228411],
      ],
    },
    {
      id: "42",
      coordinates: [
        [29.30303426, 47.96089847],
        [29.31855618, 47.9791841],
      ],
    },
    {
      id: "43",
      coordinates: [
        [29.31703274, 47.95202026],
        [29.334184, 47.97463331],
      ],
    },
    {
      id: "44",
      coordinates: [
        [29.3498032, 48.00335435],
        [29.37252039, 48.03185223],
      ],
    },
    {
      id: "45",
      coordinates: [
        [29.34046899, 47.99410362],
        [29.35691849, 48.01344034],
      ],
    },
    {
      id: "46",
      coordinates: [
        [29.33496595, 47.98303986],
        [29.35039209, 48.00065566],
      ],
    },
    {
      id: "47",
      coordinates: [
        [29.33199344, 47.97122241],
        [29.34573316, 47.98743957],
      ],
    },
    {
      id: "48",
      coordinates: [
        [29.34114438, 47.93554424],
        [29.36645187, 47.9631153],
      ],
    },
    {
      id: "49",
      coordinates: [
        [29.34363062, 47.95629018],
        [29.35960854, 47.97422713],
      ],
    },
    {
      id: "50",
      coordinates: [
        [29.34363062, 47.97251182],
        [29.36127885, 47.99410362],
      ],
    },
    {
      id: "51",
      coordinates: [
        [29.35039209, 47.986847],
        [29.36494754, 48.00335435],
      ],
    },
    {
      id: "52",
      coordinates: [
        [29.35691849, 47.9922183],
        [29.37393137, 48.01087587],
      ],
    },
    {
      id: "53",
      coordinates: [
        [29.38061591, 47.9938931],
        [29.39097387, 48.00276873],
      ],
    },
    {
      id: "54",
      coordinates: [
        [29.37204237, 47.9733229],
        [29.39097387, 47.99818972],
      ],
    },
    {
      id: "55",
      coordinates: [
        [29.37432074, 47.96451076],
        [29.39415723, 48.00637271],
      ],
    },
    {
      id: "56",
      coordinates: [
        [29.35900414, 47.97414575],
        [29.37530028, 47.99645961],
      ],
    },
    {
      id: "57",
      coordinates: [
        [29.31305437, 47.92016949],
        [29.34852826, 47.96089847],
      ],
    },
    {
      id: "58",
      coordinates: [
        [29.3398187, 47.89869809],
        [29.36358141, 47.93983975],
      ],
    },
    {
      id: "59",
      coordinates: [
        [29.30965833, 47.87780618],
        [29.34674887, 47.93072247],
      ],
    },
    {
      id: "60",
      coordinates: [
        [29.3065904611, 47.8869354467],
        [29.3269512475, 47.9263855949],
      ],
    },
    {
      id: "61",
      coordinates: [
        [29.3108012886, 47.8288897277],
        [29.3252502408, 47.8635752414],
      ],
    },
    {
      id: "62",
      coordinates: [
        [29.3097967197, 47.8621179872],
        [29.3267784288, 47.8849888497],
      ],
    },
    {
      id: "63",
      coordinates: [
        [29.3111719042, 47.7851671916],
        [29.3373589737, 47.8293545613],
      ],
    },
    {
      id: "64",
      coordinates: [
        [29.319834901, 47.7988071249],
        [29.3565860435, 47.8324367813],
      ],
    },
    {
      id: "65",
      coordinates: [
        [28.9082745154, 46.5536289201],
        [30.1036935951, 48.3799290204],
      ],
    },
    {
      id: "66",
      coordinates: [
        [28.5246699793, 47.5397033702],
        [29.2088063683, 48.2851682206],
      ],
    },
    {
      id: "67",
      coordinates: [
        [29.1958419376, 47.9878760682],
        [29.2658417671, 48.0597260036],
      ],
    },
    {
      id: "68",
      coordinates: [
        [29.2259534037, 48.0704956302],
        [29.2745882604, 48.1044164127],
      ],
    },
    {
      id: "69",
      coordinates: [
        [29.1726190444, 47.9914402437],
        [29.2061866824, 48.0689594192],
      ],
    },
    {
      id: "70",
      coordinates: [
        [29.1762228934, 48.063916897],
        [29.1986266037, 48.0917900797],
      ],
    },
    {
      id: "71",
      coordinates: [
        [29.2197541295, 48.0500976564],
        [29.2426836263, 48.0814834756],
      ],
    },
    {
      id: "72",
      coordinates: [
        [29.1801551775, 48.089299383],
        [29.2148559693, 48.1205426375],
      ],
    },
    {
      id: "73",
      coordinates: [
        [29.2389883405, 48.0423101227],
        [29.2688311438, 48.0916424092],
      ],
    },
    {
      id: "74",
      coordinates: [
        [29.2092719506, 48.0814834756],
        [29.235182218, 48.1109191122],
      ],
    },
    {
      id: "75",
      coordinates: [
        [29.2061866824, 48.0557511554],
        [29.2259534037, 48.0908575696],
      ],
    },
    {
      id: "76",
      coordinates: [
        [29.1918814811, 48.0597260036],
        [29.2094684902, 48.0933748785],
      ],
    },
    {
      id: "77",
      coordinates: [
        [28.5342480323, 48.127754258],
        [29.0198505694, 48.4334189284],
      ],
    },
    {
      id: "78",
      coordinates: [
        [28.9178969269, 48.0917666681],
        [29.0934092021, 48.2069691165],
      ],
    },
    {
      id: "79",
      coordinates: [
        [29.1587702328, 48.1101497609],
        [29.1867707977, 48.1328500557],
      ],
    },
    {
      id: "80",
      coordinates: [
        [29.1548329565, 48.0690231738],
        [29.1805609832, 48.0936039084],
      ],
    },
    {
      id: "81",
      coordinates: [
        [29.1579376527, 48.0909651931],
        [29.1840339293, 48.1138113389],
      ],
    },
    {
      id: "82",
      coordinates: [
        [29.1366480475, 48.1104262867],
        [29.1610708505, 48.1367719521],
      ],
    },
    {
      id: "83",
      coordinates: [
        [29.1191200968, 48.1143628847],
        [29.1406687609, 48.1399050052],
      ],
    },
    {
      id: "84",
      coordinates: [
        [29.0908079877, 48.115834395],
        [29.1221980517, 48.1436254172],
      ],
    },
    {
      id: "85",
      coordinates: [
        [29.130956089, 48.0790068824],
        [29.1579376527, 48.1026846169],
      ],
    },
    {
      id: "86",
      coordinates: [
        [29.1342798317, 48.0936039084],
        [29.1579376527, 48.1026846169],
      ],
    },
    {
      id: "87",
      coordinates: [
        [29.1193076969, 48.0913898587],
        [29.1366480475, 48.1170716861],
      ],
    },
    {
      id: "88",
      coordinates: [
        [29.0908079877, 48.0929847911],
        [29.1232663304, 48.118383831],
      ],
    },
    {
      id: "89",
      coordinates: [
        [28.5283206609, 47.9287863355],
        [28.6970205406, 48.2163557623],
      ],
    },
    {
      id: "90",
      coordinates: [
        [28.5328017663, 48.1992741946],
        [28.7359251109, 48.3972791439],
      ],
    },
    {
      id: "91",
      coordinates: [
        [29.0696463738, 48.1114690625],
        [29.0944515418, 48.155193473],
      ],
    },
    {
      id: "92",
      coordinates: [
        [29.0456372418, 48.1085451411],
        [29.0757468872, 48.1759389201],
      ],
    },
    {
      id: "93",
      coordinates: [
        [29.0187327227, 48.1139042699],
        [29.0536159744, 48.1784073333],
      ],
    },
    {
      id: "94",
      coordinates: [
        [29.264874104, 47.7853486053],
        [29.3009558597, 47.8647674779],
      ],
    },
    {
      id: "96",
      coordinates: [
        [29.2955540065, 47.7851671916],
        [29.3117068508, 47.8322945472],
      ],
    },
    {
      id: "97",
      coordinates: [
        [29.2952270716, 47.8322102444],
        [29.311139207, 47.8656950675],
      ],
    },
    {
      id: "98",
      coordinates: [
        [29.3034273656, 47.630353994],
        [29.3388719854, 47.7015145429],
      ],
    },
    {
      id: "99",
      coordinates: [
        [29.2808478667, 47.7347965758],
        [29.3236610358, 47.7934087612],
      ],
    },
    {
      id: "100",
      coordinates: [
        [29.2958840076, 47.6763641252],
        [29.340618732, 47.7508171739],
      ],
    },
    {
      id: "101",
      coordinates: [
        [29.3258908492, 47.6752225354],
        [29.3526608018, 47.7135503176],
      ],
    },
    {
      id: "102",
      coordinates: [
        [29.3352897614, 47.6298797094],
        [29.3736846121, 47.6872185271],
      ],
    },
    {
      id: "103",
      coordinates: [
        [29.1820154456, 47.8815833013],
        [29.2278123564, 47.9606726667],
      ],
    },
    {
      id: "104",
      coordinates: [
        [29.1886567891, 47.8059695942],
        [29.2547140843, 47.8864835179],
      ],
    },
    {
      id: "105",
      coordinates: [
        [29.2822925286, 47.9635637081],
        [29.3040855418, 47.9855138056],
      ],
    },
    {
      id: "106",
      coordinates: [
        [29.3005791541, 47.9263855949],
        [29.317032739, 47.963563708],
      ],
    },
    {
      id: "107",
      coordinates: [
        [29.2657462642, 47.9478064482],
        [29.2902194476, 47.9705761208],
      ],
    },
    {
      id: "108",
      coordinates: [
        [29.2661373894, 47.9253221346],
        [29.2802359928, 47.952131666],
      ],
    },
    {
      id: "109",
      coordinates: [
        [29.2987058554, 47.9048954325],
        [29.3130543731, 47.9275753833],
      ],
    },
    {
      id: "110",
      coordinates: [
        [29.2744380802, 47.8644589352],
        [29.2966201615, 47.8890035725],
      ],
    }

  ];

  const [coords, setCoords] = useState([]);

console.log(govid)

    useEffect(() => {
      innerBounds.map((item) => {
        if (item.id === govid.toString()) {
          setCoords(item.coordinates);
        }
      });
    }, [govid]);

  


  function onEachConstruction(construction, layer) {
    const COProjectName = construction.properties.co_name_ar;
    const COProjectDescription = construction.properties.description_ar;
    const COProjectImage1 = "https://geo1.esmrts.com/image/" + construction.properties.image1;
    layer.bindPopup(
      `
      <div style="font-family: 'Tajawal', sans-serif;">
      <div style=" width:100%; float:left; background-image: url('${COProjectImage1}'); background-size: cover; padding-top: 40px; padding-bottom: 40px; background-blend-mode: overlay; background-color: currentcolor;  image-repeat:no-repeat; margin-bottom:20px; font-weight:10px">
       <h1 style='font-size: 18px; color: white; text-align:center; padding:20px; font-weight: 700;'> ${COProjectName} </h1>
      </div>
      <br></br>
      <p style="text-align:center; padding:10px; margin-top:5px; font-weight: bold;"> ${COProjectDescription}</p>
     <hr />
     <p style="text-align:center; padding:10px; font-weight: bold;">${construction.geometry.coordinates[0]}, ${construction.geometry.coordinates[1]}</p>
      <hr/>
    </div>
      `
    );
  }

  function onEachSPF(spf, layer) {
    const SPFProjectName = spf.properties.st_name_ar;
    const COProjectDescription = spf.properties.description_ar;
    const COProjectImage1 = "https://geo1.esmrts.com/image/" + spf.properties.image1;
    layer.bindPopup(
      `
      <div style="font-family: 'Tajawal', sans-serif;">
      <div style=" width:100%; float:left; background-image: url('${COProjectImage1}'); background-size: cover; padding-top: 40px; padding-bottom: 40px; background-blend-mode: overlay; background-color: currentcolor;  image-repeat:no-repeat; margin-bottom:20px; font-weight:10px">
       <h1 style='font-size: 18px; color: white; text-align:center; padding:20px; font-weight: 700;'> ${SPFProjectName} </h1>
      </div>
      <br></br>
      <p style="text-align:center; padding:10px; margin-top:5px; font-weight: bold;"> ${COProjectDescription}</p>
     <hr />
     <p style="text-align:center; padding:10px; font-weight: bold;">${spf.geometry.coordinates}</p>
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

    // useEffect(() => {
    //   if (areaGov === true) {
    //     map.flyTo([areazone, areazone1], map.getZoom());
    //     setPosition([areazone, areazone1]);
    //   } else if(projectPosition === true) {
    //     setPosition([projectCoordinated, projectCoordinated1]);
    //     map.flyTo([projectCoordinated, projectCoordinated1], map.getZoom());
    //   }else{
    //     map.locate()
    //   }
    // }, [projectCoordinated]);


 

    useEffect(() => {
      if (areaGov === true) {
        // map.flyTo([areazone, areazone1], map.getZoom());
        map.fitBounds(coords);
        setPosition([areazone, areazone1]);
      } else {
       
        setPosition([projectCoordinated, projectCoordinated1]);
        map.flyTo([projectCoordinated, projectCoordinated1], map.getZoom());
        
      }
      // if(projectPosition === true)
      // else{
      //   map.locate()
      // }
    }, [projectCoordinated]);

    return position === null ? null : (
      <>
        <Marker position={position} icon={greenIcon}>
          <Popup>
            {areaGov ? (
              <h1 className="font-extrabold mt-5 p-4 font-tajwal">
                أنت هنا
              </h1>
            ) : projectPosition ? (
              <>
                <div>
                  <img src={proImage} height={200} width={400} />
                </div>
                <h1 className="font-extrabold text-lg p-4 text-center font-tajwal">
                  {projectName}
                </h1>
                <hr />
                <h1 className="font-extrabold mt-5 text-center p-4 font-tajwal">
                  {projectDescription}
                </h1>
              </>
            ) : (
              <h1 className="font-extrabold mt-5 font-tajwal p-4">
                أنت هنا
              </h1>
            )}
          </Popup>
        </Marker>
      </>
    );
  }



  return (
    <div className=" flex relative lg:mt-[69.38px] font-tajwal" id="map">
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
