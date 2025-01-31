import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";
import { useEffect, useState } from "react";
console
let Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resCardData);
  const [filteredRestaurant,setFilterRestaurant]= useState(resCardData)
  const [searchText, setsearchText] = useState("");
 
  useEffect(() => {
    console.log("useEffect called!");
  }, []);
  return (
    <div className="body">
      <div className="filter">
        <div className="search filter-btn">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredRes = listOfRestaurant.filter((res) =>
                res.cuisine.toLowerCase().includes(searchText.toLowerCase())
              );

             setFilterRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //! Filter logic is here!
            let filteredList = listOfRestaurant.filter(
              (res) => res.rating > 4.6
            );

            setFilterRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* The below div contain so many restaurant carts. */}
      <div className="res-container">
        {filteredRestaurant.map((x) => {
          return <RestaurantCard resData={x} />;
        })}
      </div>
    </div>
  );
};
export default Body;