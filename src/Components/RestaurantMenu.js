import { useState, useEffect } from "react";
import { basePath } from "../../utils/urls";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

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
      <img className="res-menu-image" src={basePath + cloudinaryImageId} />
      <h1> {name}</h1>
      <p> {city}</p>
      <h3> {cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((itemCard) => {
          return (
            <li key={itemCard.card.info.id}>
              {itemCard.card.info.name} - {"₹" + itemCard.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
