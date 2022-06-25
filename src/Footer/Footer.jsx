import { TbWorld } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="w-full h-[70px] px-20 border border-t-1 border-gray-300 fixed bottom-0 bg-[#fafafa]">
      <div className="w-full h-full flex justify-between items-center font-poppins">
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
        <ul className="flex text-sm font-poppins">
          <li className="pr-6 flex items-center">
            <span className="pr-2">
              <TbWorld />
            </span>
            Français (FR)
          </li>
          <li className="pr-6">
            <span className="pr-2">€</span> EUR
          </li>
          <li>Assistance et ressources</li>
        </ul>
      </div>
    </div>
  );
}
