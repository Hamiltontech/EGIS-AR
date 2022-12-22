import React from "react";
import Image from "next/image";
import logo1 from "../../public/assets/Layer.png";
import logo2 from "../../public/assets/GeoServer.png";
import logo3 from "../../public/assets/MaxCDN.png";
import logo4 from "../../public/assets/microsoft.png";

const TechicalSection = () => {
  return (
    <div className="h-full w-full bg-cover bg-[url('https://geo1.esmrts.com/wp-content/uploads/2021/06/shutterstock_1228516114-scaled.jpg')]
    ">
      <div className="w-full h-full bg-white/70 grid place-items-center">
<h1 className="font-extrabold text-5xl text-[#162641] grid text-center mt-20">4.0.0
<h1 className="text-[#162641] tracking-widest font-light text-3xl max-w-[800px] my-5">Built over NEXTJS, Tailwind running over NodeJS Server with GeoServer & QGIS as the backend in integration with PgSQL</h1>

</h1>
<img src="https://geo1.esmrts.com/wp-content/uploads/2021/05/3-app-stores-2048x222.png" width="50%" className="-mt-[500px]"/>
     
      </div>
      
    </div>
  );
};

export default TechicalSection;
