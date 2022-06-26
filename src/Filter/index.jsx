import Icons from "../data/icons";
import option from "../assets/pictures/option.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Filter() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-20 pt-5 relative ">
      <IoIosArrowBack
        size={25}
        onClick={slideLeft}
        className="hidden md:block z-10 absolute left-[5%] top-7 translate-x-2/4 cursor-pointer hover:shadow-lg border border-gray-300 hover:scale-110 hover:duration-100 rounded-full"
      />
      <div
        id={"slider"}
        className="overflow-x-auto md:overflow-x-hidden scroll-smooth scrollbar-hide relative "
      >
        <div className="w-full  grid gap-[32px] grid-flow-col-dense justify-between items-center ">
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
      </div>
      <IoIosArrowForward
        size={25}
        onClick={slideRight}
        className="hidden md:block absolute z-10 right-[15%] top-7 translate-x-2/4 cursor-pointer hover:shadow-lg border border-gray-300 hover:scale-110 hover:duration-100 rounded-full"
      />
      <div className="hidden md:flex md:justify-center md:items-center md:py-4  md:border md:border-gray-300 md:rounded-[12%] md:p-5 md:ml-4">
        <img className="h-[18px]" src={option} alt="/" />
        <p className="text-xs font-semibold">Filtres</p>
      </div>
    </div>
  );
}
