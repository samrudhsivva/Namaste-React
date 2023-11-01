import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { swiggyAPI } from "../../utils/urls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useGetToprated from "../../utils/useGetToprated";
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
      {console.log(restaurants, searchedRestaurants, searchText)}
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
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(searchText);
              setSearchedRestaurants(searchedRestaurants1);
            }}
          >
            Search
          </button>
        </div>
        <div className="topRated">
          <button
            onClick={() => useGetToprated(restaurants, setSearchedRestaurants)}
          >
            Show Top Rated⭐🌟⭐
          </button>
        </div>
      </div>

      <div className="res-container">
        {searchedRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {" "}
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
