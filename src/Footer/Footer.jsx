import { TbWorld } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { navOne, navTwo, navThree, navFour } from "../data/navFooter";

export default function Footer({ toggle, isClick }) {
  return (
    <div className="w-full mt-8 flex md:h-[70px] md:px-20 border md:border-t-1 md:border-gray-300 relative md:fixed md:bottom-0 bg-gray-100 md:bg-[#fafafa] md:z-50">
      <div
        className={
          isClick
            ? "md:fixed md:left-0 md:top-0 md:w-full md:h-screen md:duration-300 md:ease-in md:bg-[#7a7a7a]/70"
            : ""
        }
      >
        <div className="w-full h-full px-6 md:px-0 md:flex md:justify-between md:items-center md:font-poppins">
          <div
            className={
              isClick
                ? "px-6 py-8 md:bg-white md:rounded-t-xl md:flex md:justify-between md:w-full md:h-[60%] md:fixed md:bottom-0  md:right-0 md:duration-300 md:ease-in md:px-20 md:mt-12"
                : "px-6 py-8  h-auto bg-gray-100 border-t border-gray-200 md:w-full md:h-[60%]  md:fixed md:bottom-[-190%] md:right-0 md:duration-300 md:ease-in"
            }
          >
            <div
              onClick={toggle}
              className="hidden md:block absolute top-6 left-6 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
            <section
              className={
                isClick ? "pb-6 mb-6" : "pb-6 mb-6 border-b border-gray-200"
              }
            >
              <h1 className="font-poppins font-bold text-sm">Assistance</h1>
              <ul className={isClick ? "text-xs font-plight" : ""}>
                {navOne.map((item) => (
                  <li key={item.id} className="mt-3">
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
            <section
              className={
                isClick ? "pb-6 mb-6" : "pb-6 mb-6 border-b border-gray-200"
              }
            >
              <h1 className="font-poppins font-bold text-sm">Communaut??</h1>
              <ul className={isClick ? "text-xs font-plight" : ""}>
                {navTwo.map((item) => (
                  <li key={item.id} className="mt-3">
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
            <section
              className={
                isClick ? "pb-6 mb-6" : "pb-6 mb-6 border-b border-gray-200"
              }
            >
              <h1 className="font-poppins font-bold text-sm">
                Accueil de voyageurs
              </h1>
              <ul className={isClick ? "text-xs font-plight" : ""}>
                {navThree.map((item) => (
                  <li key={item.id} className="mt-3">
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
            <section
              className={
                isClick ? "pb-6 mb-6" : "pb-6 mb-6 border-b border-gray-200"
              }
            >
              <h1 className="font-poppins font-bold text-sm">?? propos</h1>
              <ul className={isClick ? "text-xs font-plight" : ""}>
                {navFour.map((item) => (
                  <li key={item.id} className="mt-3">
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <ul
            className={
              isClick
                ? "md:hidden  flex flex-1 flex-wrap text-xs"
                : "flex flex-1 flex-wrap text-xs"
            }
          >
            <li className="font-plight">
              ?? 2022 Airbnb, Inc.<span className="pl-2">??</span>
            </li>
            <li className="font-plight pl-2 cursor-pointer hover:underline">
              Confidentialit??
            </li>
            <span className="pl-2">??</span>
            <li className="font-plight pl-2 cursor-pointer hover:underline">
              Conditions g??n??rales
            </li>
            <span className="pl-2">??</span>
            <li className="font-plight pl-2 cursor-pointer hover:underline">
              Plan du site
            </li>
            <span className="pl-2">??</span>
            <li className="font-plight pl-2 cursor-pointer hover:underline">
              Fonctionnement du site
            </li>
            <span className="pl-2">??</span>
            <li className="font-plight pl-2  cursor-pointer hover:underline">
              Infos sur l'entreprise
            </li>
            <span className="pl-2">??</span>
            <li className="font-plight pl-2  cursor-pointer hover:underline">
              Destinations
            </li>
          </ul>
          <ul
            className={
              isClick
                ? "hidden"
                : "flex md:w-[35%] md:justify-between text-[14px] font-poppins "
            }
          >
            <li className=" flex items-center">
              <span className="pr-2">
                <TbWorld />
              </span>
              Fran??ais (FR)
            </li>
            <li className="">
              <span className="pr-2">???</span> EUR
            </li>
            <li
              onClick={toggle}
              className="hidden md:flex md:items-center md:cursor-pointer md:hover:border-b md:hover:border-black"
            >
              Assistance et ressources{" "}
              <span className="pl-2">
                <IoIosArrowUp />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
