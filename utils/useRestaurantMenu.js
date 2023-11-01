import { useEffect, useState } from "react";
import { menuApiUrl } from "./urls";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(menuApiUrl + resId);
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
