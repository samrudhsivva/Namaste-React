import { basePath } from "../../utils/urls";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { name, cuisines, locality, cloudinaryImageId, avgRating } = info;

  const baseURL = basePath;

  const resImage = baseURL + cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="res-card-image" alt="restaurant-logo" src={resImage} />
      <h2>{name}</h2>
      <div>{cuisines?.join(",")}</div>
      <h5>{avgRating}</h5>
      <h5>{locality}</h5>
    </div>
  );
};
export default RestaurantCard;
