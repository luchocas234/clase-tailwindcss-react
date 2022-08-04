import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Navbar() {
  return (
    <div className="w-full h-[80px] fixed z-20">
      <div className="w-[90%] h-full mx-auto flex justify-between items-center ">
        <div className="w-14 h-14 bg-black rounded-full text-white hidden md:flex items-center justify-center text-xl font-light hover:scale-125 duration-300 drop-shadow-xl">
          <a href="#">L | C</a>
        </div>
        <div>
          <ul className=" w-full h-full  hidden md:flex gap-6 text-white text-xl">
            <li className="hover:underline hover:scale-125 duration-300 ">
              <a href="#">Inicio</a>
            </li>
            <li className="hover:underline hover:scale-125 duration-300">
              <a href="#">Sobre mi</a>
            </li>
            <li className="hover:underline hover:scale-125 duration-300">
              <a href="#">Proyectos</a>
            </li>
            <li className="hover:underline hover:scale-125 duration-300">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="group w-14 h-14 rounded-full bg-white hidden md:flex items-center justify-center hover:scale-125 duration-300 drop-shadow-xl ">
          <a href="#">
            <IoLogoWhatsapp className="text-4xl text-green-500 group-hover " />
          </a>
          <div className="w-10 ">HOLAAA</div>
        </div>
        <button className="bg-black w-10 h-10 md:hidden flex text-white rounded-full justify-center items-center">
          +
        </button>
      </div>
    </div>
  );
}
