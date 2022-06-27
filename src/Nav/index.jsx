export default function Nav({ isOpen }) {
  return (
    <div
      className={
        isOpen
          ? "hidden md:block md:w-[230px] md:h-[210px] md:p-4  md:absolute md:right-20 md:top-[70px] md:bg-[#fafafa] md:shadow-2xl md:rounded-lg md:z-50"
          : "hidden"
      }
    >
      <ul className="w-full h-full flex flex-col justify-between items-start">
        <li className="w-full pb-2 font-plight text-xs cursor-pointer ">
          Inscription
        </li>
        <li className="w-full py-2 font-plight text-xs cursor-pointer">
          Connexion
        </li>
        <li className="w-full border-b border-gray-300 my-2 cursor-pointer"></li>
        <li className="w-full py-2 font-plight text-xs cursor-pointer">
          Héberger des voyageurs
        </li>
        <li className="w-full py-2 font-plight text-xs cursor-pointer">
          Créer une expérience
        </li>
        <li className="w-full pt-2 font-plight text-xs cursor-pointer">Aide</li>
      </ul>
    </div>
  );
}
