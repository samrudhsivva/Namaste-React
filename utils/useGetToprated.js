const useGetToprated = (restaurantsData, setSearchedRestaurants) => {
  let topRatedRestaurants = restaurantsData.filter(
    (restaurant) => restaurant?.info?.avgRating >= 4
  );

  setSearchedRestaurants(topRatedRestaurants);
};
export default useGetToprated;
