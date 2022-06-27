export default function Nav({ isOpen }) {
  return (
    <div
      className={
        isOpen
          ? "hidden md:block md:w-[230px] py-2 md:h-auto  md:absolute md:right-20 md:top-[70px] md:bg-[#fafafa] md:shadow-2xl md:rounded-lg md:z-50"
          : "hidden"
      }
    >
      <ul className="w-full h-full flex flex-col justify-between items-start">
        <li className="w-full p-4 font-plight text-xs cursor-pointer hover:bg-gray-100 ">
          Inscription
        </li>
        <li className="w-full p-4 font-plight text-xs cursor-pointer hover:bg-gray-100">
          Connexion
        </li>
        <li className="w-full border-b border-gray-300 my-2 cursor-pointer"></li>
        <li className="w-full p-4 font-plight text-xs cursor-pointer hover:bg-gray-100">
          Héberger des voyageurs
        </li>
        <li className="w-full p-4 font-plight text-xs cursor-pointer hover:bg-gray-100">
          Créer une expérience
        </li>
        <li className="w-full p-4 font-plight text-xs cursor-pointer hover:bg-gray-100">
          Aide
        </li>
      </ul>
    </div>
  );
}
