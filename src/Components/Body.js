import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import { swiggyAPI } from "../../utils/urls";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setTopratedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const getTopRated = (restaurantsData) => {
    console.log(restaurantsData[0].info.avgRating);
    let topRatedRestaurants = restaurantsData.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4
    );
    console.log("top rated are", topRatedRestaurants);
    setSearchedRestaurants(topRatedRestaurants);
  };
  console.log(restaurants[0]?.info?.name);
  console.log("res fetched are", searchedRestaurants);

  useEffect(() => {
    fetchData();
    console.log("This is called after loading");
  }, []);

  const fetchData = async () => {
    const response = await fetch(swiggyAPI);
    console.log("res is", response);
    const dataJSON = await response.json();
    setTopratedRestaurants(
      dataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedRestaurants(
      dataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {console.log(searchText)}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              const searchedRestaurants1 = restaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText);
              setSearchedRestaurants(searchedRestaurants1);
            }}
          >
            Search
          </button>
        </div>
        <div className="topRated">
          <button onClick={() => getTopRated(restaurants)}>
            Show Top Rated⭐🌟⭐
          </button>
        </div>
      </div>

      <div className="res-container">
        {searchedRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
