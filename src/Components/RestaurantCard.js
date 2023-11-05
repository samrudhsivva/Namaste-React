import { basePath } from "../../utils/urls";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { name, cuisines, locality, cloudinaryImageId, avgRating } = info;

  const baseURL = basePath;

  const resImage = baseURL + cloudinaryImageId;
  return (
    <div className="  bg-gray-100 res-card p-4 m-4 w-[250px]  rounded-lg hover:bg-gray-200">
      <img
        className="res-card-image rounded-lg"
        alt="restaurant-logo"
        src={resImage}
      />
      <h2 className="font-bold text-lg py-3">{name}</h2>
      <div>{cuisines?.join(",")}</div>
      <h5>{avgRating}</h5>
      <h5>{locality}</h5>
    </div>
  );
};
export default RestaurantCard;
