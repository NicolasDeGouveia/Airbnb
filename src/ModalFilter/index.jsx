import { AiOutlineClose } from "react-icons/ai";

export default function ModalFilter({ toggle, isModal }) {
  return (
    <div className={isModal ? "w-full h-full" : "hidden"}>
      <div className="fixed left-0 top-0 w-full h-screen duration-300 ease-in bg-[#7a7a7a]/70 z-[1000] flex">
        <div className="w-[800px] h-auto relative bg-white m-auto rounded-xl">
          <div className="px-6 h-[60px] flex justify-center items-center border-b border-gray-200">
            <h1 className="text-center font-poppins">Filtres</h1>
            <div onClick={toggle} className="cursor-pointer">
              <AiOutlineClose className="absolute top-6 left-4" />
            </div>
          </div>
          <div className="p-8">
            <div className="pb-10">
              <h1 className="text-2xl font-poppins">Fourchette de prix</h1>
              <h2 className="font-plight text-[#717171] font-semibold">
                Le prix moyen par nuit est de 395 €
              </h2>
            </div>
            <div>
              <div className="flex items-baseline mx-8">
                <div className="h-[5px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[10px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[15px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[18px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[20px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[23px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[25px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[27px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[35px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[40px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[50px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[51px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[52px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[55px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[60px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[55px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[52px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[48px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[44px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[40px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[35px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[32px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[28px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[23px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[20px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[15px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[12px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[10px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[6px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[5px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[6px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[5px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[6px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[5px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[6px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[5px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
                <div className="h-[3px] w-[10px] bg-[#b0b0b0] mr-[1px]" />
              </div>
              <div className="border-b-2 border-gray-400 mx-8"></div>
              <div className="relative">
                <button className="h-[30px] w-7 border border-gray-200 rounded-xl absolute left-1 bottom-[-15px]">
                  <div className="flex justify-evenly">
                    <div className="h-[10px] w-[1px] bg-[#7a7a7a]" />
                    <div className="h-[10px] w-[1px] bg-[#7a7a7a]" />
                    <div className="h-[10px] w-[1px] bg-[#7a7a7a]" />
                  </div>
                </button>
                <button className="h-[30px] w-7 border border-gray-200 rounded-xl absolute right-1 bottom-[-15px]">
                  <div className="flex justify-evenly">
                    <div className="h-[10px] w-[1px] bg-[#7a7a7a]" />
                    <div className="h-[10px] w-[1px] bg-[#7a7a7a]" />
                    <div className="h-[10px] w-[1px] bg-[#7a7a7a]" />
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-7 mx-8 flex justify-center items-center">
              <div className="relative w-full flex shadow-[0_0_0_1px_rgb(176,176,176)] min-h-[54px] rounded-lg">
                <label className="relative w-full" htmlFor="price_filter_min">
                  <div className="absolute top-[10px] left-3 w-full">
                    <div className="font-plight text-xs text-[#717171]">
                      Prix minimum
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="pl-3 pt-6">
                      <span>€</span>
                    </div>
                    <input
                      className=" w-full mx-3 mt-6 mb-1 border-transparent outline-none bg-transparent"
                      id="price_filter_min"
                    />
                  </div>
                </label>
              </div>
              {/* TO DO ! Div potentielle a mettre ici */}
              <div className="m-2">-</div>
              <div className="relative w-full flex shadow-[0_0_0_1px_rgb(176,176,176)] min-h-[54px] rounded-lg">
                <label className="relative w-full" htmlFor="price_filter_max">
                  <div className="absolute top-[10px] left-3 w-full">
                    <div className="font-plight text-xs text-[#717171]">
                      Prix maximum
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="pl-3 pt-6">
                      <span>€</span>
                    </div>
                    <input
                      className=" w-full mx-3 mt-6 mb-1 border-transparent outline-none bg-transparent"
                      id="price_filter_max"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
