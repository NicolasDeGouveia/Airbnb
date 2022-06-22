import arrowleft from "../assets/pictures/left-arrow.png";
import arrowright from "../assets/pictures/arrow-right.png";
import { useState } from "react";
import Icons from "../data/icons";
import option from "../assets/pictures/option.png";
import ile from "../assets/pictures/filter/iles.jpg";

export default function Filter() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  console.log(Icons);

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-20 ">
      <div className="overflow-x-auto overflow-y-hidden relative ">
        <div
          onClick={slideLeft}
          className="hidden md:block md:z-10 md:absolute md:left-0 md:top-3 md:translate-x-2/4 md:translate-y-2/4"
        >
          <img src={arrowleft} alt="" />
        </div>
        <div className="w-full scroll-smooth scrollbar-hide grid gap-[32px] grid-flow-col-dense justify-between items-center relative ">
          {Icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col justify-center items-center w-max"
            >
              <img
                className="h-[30px]"
                src={require("../assets/pictures/filter/" +
                  icon.picture +
                  ".jpg")}
                alt=""
              />
              <p className="text-xs text-gray-300 font-poppins">{icon.name} </p>
            </div>
          ))}
        </div>
        <div className="hidden md:block md:absolute md:right-0 md:top-3 md:translate-x-2/4 md:translate-y-2/4">
          <img onClick={slideRight} src={arrowright} alt="/" />
        </div>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:py-4  md:border md:border-gray-300 md:rounded-[12%] md:p-5 md:ml-4">
        <img className="h-[18px]" src={option} alt="/" />
        <p className="text-xs font-semibold">Filtres</p>
      </div>
    </div>
  );
}
