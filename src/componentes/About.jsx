import React from "react";
import phprofile from "../media/phprofile.jpeg";
import htmlLogo from "../media/logos/html5.svg";
import jsLogo from "../media/logos/js.svg";
import cssLogo from "../media/logos/css3-original.svg";
import reactlLogo from "../media/logos/react.svg";

export const About = () => {
  return (
    <div className="w-full h-full   ">
      <div className="w-[90%] mx-auto   grid grid-cols-2 gap-10 p-8">
        <div className="col-span-2 md:col-span-1  flex flex-col justify-around items-center h-full w-[90%] mx-0 gap-6 ">
          <div className=" h-full flex justify-evenly flex-col ">
            <h2 className="text-4xl font-semibold"> Te cuento más sobre mi </h2>
            <p>
              Me dedico al desarrollo web Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Facere, dolores officiis eius ab rem
              voluptatem? Sapiente nulla consequatur autem nesciunt cupiditate
              quas, ipsum repellendus deleniti ipsam rerum culpa facere tempora.{" "}
            </p>
          </div>
          <div className=" w-full h-full flex flex-col justify-center ">
            Mis tecnologías:
            <div className="grid grid-cols-4 ">
              <img src={htmlLogo} alt="foto perfil" className="h-20" />
              <img src={cssLogo} alt="foto perfil" className="h-20" />
              <img src={jsLogo} alt="foto perfil" className="h-20" />
              <img src={reactlLogo} alt="foto perfil" className="h-20" />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-wrap justify-center items-center object-cover h-full w-full  ">
          {" "}
          <img
            src={phprofile}
            alt="foto perfil"
            className="w-full h-[40vh] md:h-[70vh] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};
