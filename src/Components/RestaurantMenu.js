import { useState, useEffect } from "react";
import { basePath } from "../../utils/urls";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuApiUrl } from "../../utils/urls";
const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  console.log("params are", resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(menuApiUrl + resId);
    const json = await response.json();
    setResData(json.data);
  };
  console.log("data is", resData);
  console.log("info data is", resData?.cards[0]?.card?.card?.info);

  const { name, city, cuisines, cloudinaryImageId } =
    resData?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  console.log(itemCards);

  return resData === null ? (
    <Shimmer />
  ) : (
    <div className="res-menu">
      <img src={basePath + cloudinaryImageId} />
      <h1> {name}</h1>
      <p> {city}</p>
      <h3> {cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((itemCard) => {
          return (
            <li key={itemCard.card.info.id}>
              {itemCard.card.info.name} -{" "}
              {"₹" + itemCard.card.info.price / 100 }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
