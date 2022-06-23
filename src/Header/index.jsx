import airbnb from "../assets/pictures/airbnb.png";
import { TbWorld } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import loupe from "../assets/pictures/loupe.png";
import option from "../assets/pictures/option.png";

export default function Header() {
  return (
    <div className="w-full h-[80px] px-20 border border-t-0 border-gray-300 ">
      <div className="w-full h-full flex justify-between items-center font-poppins">
        <div className="hidden md:flex md:items-center">
          <img src={airbnb} alt="AIRBNB" />
          <h1 className="text-lg font-bold text-red-500">airbnb</h1>
        </div>
        <div className="hidden md:flex md:justify-between md:items-center md:border md:border-gray-300 md:py-4 md:px-3 md:rounded-[30px] md:shadow md:h-[60%] md:hover:cursor-pointer md:hover:shadow-lg">
          <div className="border-r border-gray-400 ">
            <p className="text-sm mx-3">N'importe où</p>
          </div>
          <div className="border-r border-gray-400">
            <p className="text-sm mx-3">Une semaine</p>
          </div>
          <div className="ml-3 flex justify-between items-center">
            <p className="text-sm text-gray-400 font-plight mr-2">
              Ajouter des voyageurs
            </p>
            <div className="w-8 h-8">
              <img
                className="hidden w-full h-full object-none md:block rounded-[50%] bg-[#ff385c] p-1"
                src={loupe}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:hidden flex w-full justify-between items-center border border-gray-300 py-4 px-3 rounded-[30px] shadow h-[60%] hover:cursor-pointer hover:shadow-lg">
          <div>
            <img src={loupe} alt="/" />
          </div>
          <div className="flex justify-start w-full mr-4">
            <p className="text-sm">Destination</p>
          </div>
          <div className="border border-gray-300 rounded-[50%] p-1">
            <img src={option} alt="/" />
          </div>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center ">
          <div className="hover:bg-gray-100 w-13 h-10 flex justify-center items-center px-4 rounded-[30px]">
            <p className="text-sm">Devenez hôte</p>
          </div>
          <div className=" w-10 h-10 hover:bg-gray-100 hover:cursor-pointer flex justify-center items-center rounded-[50px]">
            <TbWorld className="w-[18px] h-[18px]" />
          </div>
          <div className="ml-2 flex justify-center items-center p-1 border border-gray-300 rounded-[30px] hover:shadow-md hover:cursor-pointer">
            <div className="mr-2">
              <FaBars />
            </div>
            <div>
              <IoPersonCircleSharp className="w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
