import { useState } from "react";

const SearchBar = () => {
  let [searchValue, setSearchValue] = useState();
  const searchHandler = () => {
    console.log("you searched for", searchValue);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Eg: Samosa, Pizza, Ice-cream"
      />
      <button onClick={searchHandler}>search</button>
    </div>
  );
};

export default SearchBar;
