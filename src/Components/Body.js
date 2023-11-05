import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { swiggyAPI } from "../../utils/urls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useGetToprated from "../../utils/useGetToprated";
import Example from "./Workwithus";
const Body = () => {
  const [restaurants, setTopratedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
    console.log("This is called after loading");
  }, []);

  const fetchData = async () => {
    const response = await fetch(swiggyAPI);
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
  console.log("res is", restaurants);

  console.log("online status is", onlineStatus);
  if (onlineStatus == false) {
    return <h1>You are Offline !!! ❌</h1>;
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center filter">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-button m-2 bg-green-100 px-3 py-1  rounded-lg"
            onClick={() => {
              const searchedRestaurants1 = restaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setSearchedRestaurants(searchedRestaurants1);
            }}
          >
            Search
          </button>
        </div>
        <div className="topRated ">
          <button
            className="px-2 py-0.5 bg-gray-200 rounded-lg"
            onClick={() => useGetToprated(restaurants, setSearchedRestaurants)}
          >
            Show Top Rated⭐🌟⭐
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {searchedRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
      <Example/>
    </div>
  );
};

export default Body;
