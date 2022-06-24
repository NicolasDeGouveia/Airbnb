import { IoStarSharp } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Card() {
  const [dataContent, setDataContent] = useState([]);

  const contentData = async () => {
    try {
      const response = await axios.get("/db/db.json");
      setDataContent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    contentData();
  }, []);

  return (
    <>
      {dataContent.map((item) => (
        <div key={item.id} className="max-w-xs w-full text-sm">
          <img
            className="w-full h-[200px] object-cover rounded-xl"
            src={item.Picture}
            alt="/"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm font-poppins mt-2">{item.country}</p>
            <p className="flex items-center">
              {item.rate}
              <span className="pl-1">
                <IoStarSharp />
              </span>{" "}
            </p>
          </div>
          <div>
            <p className="font-plight text-gray-400">{item.host}</p>
          </div>
          <div>
            <p className="font-plight text-gray-400">{item.date}</p>
          </div>
          <div>
            <p className="font-poppins mt-2 ">{item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
