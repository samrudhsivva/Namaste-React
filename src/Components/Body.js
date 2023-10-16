import RestaurantCard from "./RestaurantCard";
import resData from "../../utils/mockData";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Body = () => {
  let [restaurants, setTopratedRestaurants] = useState(resData.restaurants);
  const getTopRated = (restaurantsData) => {
    console.log(restaurantsData[0].info.avgRating);
    let topRatedRestaurants = restaurantsData.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4
    );
    console.log("top rated are", topRatedRestaurants);
    setTopratedRestaurants(topRatedRestaurants);
  };

  return (
    <div className="body">
      <SearchBar />
      <button className="topRated" onClick={() => getTopRated(restaurants)}>
        Show Top Rated⭐🌟⭐
      </button>

      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
