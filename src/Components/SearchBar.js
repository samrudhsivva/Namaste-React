import { useState } from "react";

const SearchBar = (props) => {
  let [searchValue, setSearchValue] = useState();
  const searchHandler = () => {
    const searchedRestaurants1 = props.restaurants.filter((res) =>
      res?.info?.name.includes(props.searchText)
    );
    props.setSearchedRestaurants(searchedRestaurants1);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Eg: Samosa, Pizza, Ice-cream"
      />
      <button className="search-button" onClick={searchHandler()}></button>
    </div>
  );
};

export default SearchBar;
