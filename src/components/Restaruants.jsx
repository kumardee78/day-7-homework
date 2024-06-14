import { useState } from "react";
import data from "../restaurant.js";
import { FaLocationDot } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";

function Restaruants() {

  const [restourant, setRestourant] = useState(data)
  // const [ rating, setRating] = useState(data)

  function filterData (e){
    const val = data.filter((item) =>{
      if(item.name.toLowerCase().includes(e)){
        return true
      }
      else
      return false
    })
    setRestourant(val)
  }
  return (
    <>
      <div className="flex justify-between pt-12 pb-6 px-16">
        <input
          type="text"
          // value={inputValue}
          placeholder="Search Restaruants..."
          onChange={(e) => filterData(e.target.value)}
          className="border-2 w-[12rem] px-4 py-1"
        />
        {/* <input type="number" name="" placeholder="rating..." maxLength={5} minLength={0} className="border-2 px-4" onChange={((e) => filterData(e.target.value))}/> */}
      </div>
      <div className="flex flex-wrap gap-4 px-12">
        {restourant.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[30%] shadow-lg rounded-lg h-[15rem] mt-4"
            >
              <div className="p-4 h-[65%] w-full">
                <span className="text-xl font-semibold ">{item.name}</span>
                <span className="text-yellow-400 font-bold ml-4">
                  Rating: {item.rating}
                </span>
                <p className="flex items-center gap-2 py-2">
                  <FaLocationDot />
                  {item.address}
                </p>
                <p>
                  {item.outcode} {item.postcode}
                </p>
              </div>

              <div className="bg-[whiteSmoke] w-full px-4 py-4 h-[35%] rounded-b-lg">
                <p className="flex items-center gap-2 text-red-400 font-semibold">
                  <MdRestaurant />
                  {item.type_of_food}
                </p>
                <a href={item.URL} className="text-blue-700">
                  Visit Menu
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Restaruants;
