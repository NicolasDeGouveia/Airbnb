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
                ? "px-6 py-8  md:bg-white md:rounded-t-xl md:flex md:justify-between md:w-full md:h-[60%] md:fixed md:bottom-0  md:right-0 md:duration-300 md:ease-in md:px-20 md:mt-12"
                : "px-6 py-8  bg-gray-100 border-t border-gray-200 md:w-full h-[60%]  md:fixed md:bottom-[-190%] md:right-0 md:duration-300 md:ease-in"
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
              <h1 className="font-poppins font-bold text-sm">Communauté</h1>
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
              <h1 className="font-poppins font-bold text-sm">À propos</h1>
              <ul className={isClick ? "text-xs font-plight" : ""}>
                {navFour.map((item) => (
                  <li key={item.id} className="mt-3">
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <ul className={isClick ? "hidden" : "flex flex-1 flex-wrap text-sm"}>
            <li className="font-plight">
              © 2022 Airbnb, Inc.<span className="pl-2">·</span>
            </li>
            <li className="font-plight pl-2">
              Confidentialité<span className="pl-2">·</span>
            </li>
            <li className="font-plight pl-2">
              Conditions générales<span className="pl-2">·</span>
            </li>
            <li className="font-plight pl-2">
              Plan du site<span className="pl-2">·</span>
            </li>
            <li className="font-plight pl-2">
              Fonctionnement du site<span className="pl-2">·</span>
            </li>
            <li className="font-plight">Infos sur l'entreprise</li>
          </ul>
          <ul className={isClick ? "hidden" : "flex text-sm font-poppins "}>
            <li className="pr-6 flex items-center">
              <span className="pr-2">
                <TbWorld />
              </span>
              Français (FR)
            </li>
            <li className="pr-6">
              <span className="pr-2">€</span> EUR
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
