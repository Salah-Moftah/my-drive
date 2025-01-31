import { IoIosSearch } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import HoverCircleBackground from "./HoverCircleBackground";
import { useState } from "react";

const Search = () => {
  const [onFocusSearchBar, setOnFocusSearchBar] = useState(false);
  return (
    <div className={`search-bar ${onFocusSearchBar && 'active'}`}>
      <div className="search-bar-input">
        <HoverCircleBackground color="gray">
          <IoIosSearch size={23} />
        </HoverCircleBackground>
        <input
          type="search"
          onClick={() => setOnFocusSearchBar(
            onFocusSearchBar === false ? true : false
          )}
          className="search-input"
          placeholder="Search in Drive"
        />
      </div>
      <HoverCircleBackground color="gray">
        <MdOutlineTune size={23} />
      </HoverCircleBackground>
    </div>
  );
};

export default Search;
