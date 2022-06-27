import { TbWorld } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { navOne, navTwo, navThree, navFour } from "../data/navFooter";

export default function Footer() {
  return (
    <div className="w-full mt-8 md:h-[70px] md:px-20 border md:border-t-1 md:border-gray-300 relative md:fixed md:bottom-0 bg-gray-100 md:bg-[#fafafa] md:z-50">
      <div className="w-full h-full px-6 md:px-0 md:flex md:justify-between md:items-center md:font-poppins">
        <div className="px-6 py-8  bg-gray-100 border-t border-gray-200 md:hidden">
          <section className="pb-6 mb-6 border-b border-gray-200">
            <h1 className="font-poppins font-bold text-sm">Assistance</h1>
            <ul>
              {navOne.map((item) => (
                <li key={item.id} className="mt-3">
                  {item.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="pb-6 mb-6 border-b border-gray-200">
            <h1 className="font-poppins font-bold text-sm">Communauté</h1>
            <ul>
              {navTwo.map((item) => (
                <li key={item.id} className="mt-3">
                  {item.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="pb-6 mb-6 border-b border-gray-200">
            <h1 className="font-poppins font-bold text-sm">
              Accueil de voyageurs
            </h1>
            <ul>
              {navThree.map((item) => (
                <li key={item.id} className="mt-3">
                  {item.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="pb-6 mb-6 border-b border-gray-200">
            <h1 className="font-poppins font-bold text-sm">À propos</h1>
            <ul>
              {navFour.map((item) => (
                <li key={item.id} className="mt-3">
                  {item.name}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <ul className="flex flex-1 flex-wrap text-sm">
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
        <ul className="flex text-sm font-poppins ">
          <li className="pr-6 flex items-center">
            <span className="pr-2">
              <TbWorld />
            </span>
            Français (FR)
          </li>
          <li className="pr-6">
            <span className="pr-2">€</span> EUR
          </li>
          <li className="hidden md:flex md:items-center md:cursor-pointer md:hover:border-b md:hover:border-black">
            Assistance et ressources{" "}
            <span className="pl-2">
              <IoIosArrowUp />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
