import Head from "next/head";
import Header from "./components/Header";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import { React, useState, useEffect } from "react";
import Areas from "../public/data/area.json";
import Govs from "../public/data/gov.json";
import Legends from "./components/Legends";
import AboutSection from "./components/AboutSection";
import About from "./About";
import { AiOutlineClose } from "react-icons/ai";
import Info from "./Info";
import Technical from "./Technical";
import dynamic from "next/dynamic";


const MyMap = dynamic(() => import("./components/Map"), {
  ssr: false
});


export default function Home() {
  


  const [sanitary, setSanitary] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [station, setStation] = useState(false);
  const [mega, setMega] = useState(false);
  const [show, setShow] = useState(false);
  const [about, setAbout] = useState(false);
  const [info, setInfo] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const [tech, setTech] = useState(false)
  const [areaGov, setAreaGov] = useState(false)
  const [position, setPosition] = useState(null);

  const [govid, setGovid] = useState(0);
  const [govzone, setGovZone] = useState(29.3117);
  const [govzone1, setGovZone1] = useState(47.4818);
  const [areazone, setAreaZone] = useState(29.3117);
  const [areazone1, setAreaZone1] = useState(47.4818);
  const [projectCoordinated, setProjectCoordinates] = useState(29.3117)
  const [projectCoordinated1, setProjectCoordinates1] = useState(47.4818)
  const [projectName,setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")

  const [projectPosition, setprojectPosition] = useState(false);

  useEffect(() => {
    Areas.features.map((item) => {
      if (item.properties.area_id.toString() === govid) {
        setAreaZone(item.geometry.coordinates[1]);
        setAreaZone1(item.geometry.coordinates[0]);
      }
    });
  }, [govid]);

  useEffect(() => {
    Govs.features.map((item) => {
      if (item.properties.gove_numbe.toString() === govid) {
        setGovZone(item.geometry.coordinates[1]);
        setGovZone1(item.geometry.coordinates[0]);
      }
    });
  }, [govid]);


  

  return (
    <div className="overflow-y-hidden font-tajwal">
      <Head>
      <title>مستكشف المشاريع الجغرافية</title>
      <meta name="description" content="نظام مستكشف المشاريع الجغرافية وزارة الأشغال العامة الكويت" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header tech={tech} setShow={setShow} show={show} setAbout={setAbout} about={about} info={info} setTech={setTech}/>

      <div className={"flex ease-in-out duration-500"}>

        <div className={info? "hidden" :about? "hidden": tech? "hidden": "block"}>
        <div
          className={
            show
              ? ` sm:w-[300px] bg-[#162641] z-40 mt-[69.38px] ease-in-out duration-500 h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide`
              : `w-0 ease-in-out duration-500 bg-[#162641] mt-[69.38px]`
          }
        >
          <Sidebar
            show={show}
            setShow={setShow}
            govid={govid}
            setGovid={setGovid}
            sanitary={sanitary}
            setSanitary={setSanitary}
            construction={construction}
            setConstruction={setConstruction}
            station={station}
            setStation={setStation}
            mega={mega}
            setMega={setMega}
            projectCoordinated={projectCoordinated}
            setProjectCoordinates={setProjectCoordinates}
            setProjectCoordinates1={setProjectCoordinates1}
            setProjectName={setProjectName}
            setProjectDescription={setProjectDescription}
            setGovZone1={setGovZone1}
            setAreaZone={setAreaZone}
            setAreaZone1={setAreaZone1}
            setInfo={setInfo}
            info={info}
            projectPosition={projectPosition} 
            setprojectPosition={setprojectPosition}
            areaGov={areaGov} setAreaGov={setAreaGov}
            
          />
        </div>
        </div>
        {/* <Search /> */}

        <div className={about ? "hidden" :info? 'hidden' :tech? "hidden" : "w-full h-full"}>
       
          <MyMap 
            govzone={govzone}
            govzone1={govzone1}
            areazone={areazone}
            areazone1={areazone1}
            projectCoordinated={projectCoordinated}
            projectCoordinated1={projectCoordinated1}
            projectName={projectName}
            projectDescription={projectDescription}
            position={position}
            projectPosition={projectPosition} 
            setprojectPosition={setprojectPosition}
            construction={construction}
            areaGov={areaGov} setAreaGov={setAreaGov}
          />
    
          {/* legends */}
          <Legends />
        </div>
        {about && (
          <div className="w-full h-full bg-[#162641] ">
            <div
              id="defaultModal"
              tabindex="-1"
              aria-hidden="true"
              class="flex justify-center align-middle   z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div class="relative w-full h-full max-w-[70%] md:h-auto ">
                <div class="relative bg-white shadow ">
                  <button
                    className="flex float-right pr-1 mt-1 cursor-pointer "
                    onClick={() => setAbout(false)}
                  >
                    <AiOutlineClose size={20} />
                  </button>
                  <div class="flex items-center py-6 pl-6 pr-1 space-x-2 border-gray-200 ">
                    <About />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
{info&&
<div className="w-full h-full bg-[#162641] ">
            <div
              id="defaultModal"
              tabindex="-1"
              aria-hidden="true"
              class="flex justify-center align-middle   z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div class="relative w-full h-full max-w-[70%] md:h-auto ">
                <div class="relative bg-white shadow ">
                  <button
                    className="flex float-right pr-1 mt-1 cursor-pointer "
                    onClick={() => setInfo(false)}
                  >
                    <AiOutlineClose size={20} />
                  </button>
                  <div class="flex items-center py-6 pl-6 pr-1 space-x-2 border-gray-200  ">
                    <Info />
                  </div>
                </div>
              </div>
            </div>
          </div>
          }

{tech&&
<div className="w-full h-full bg-[#162641] ">
            <div
              id="defaultModal"
              tabindex="-1"
              aria-hidden="true"
              class="flex justify-center align-middle   z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div class="relative w-full h-full max-w-[70%] md:h-auto ">
                <div class="relative bg-white shadow ">
                  <button
                    className="flex float-right pr-1 mt-1 cursor-pointer "
                    onClick={() => setTech(false)}
                  >
                    <AiOutlineClose size={20} />
                  </button>
                  <div class="flex items-center py-6 pl-6 pr-1 space-x-2 border-gray-200  ">
                    <Technical />
                  </div>
                </div>
              </div>
            </div>
          </div>
          }

      </div>
    </div>
  );
}
