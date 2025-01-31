import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import HoverCircleBackground from "./HoverCircleBackground";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-bar ${isFocused ? "focused" : ""}`}>
      <div className="search-bar-input">
        <HoverCircleBackground color="gray">
          <IoIosSearch size={23} />
        </HoverCircleBackground>
        <input
          type="search"
          className="search-input"
          placeholder="Search in Drive"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <HoverCircleBackground color="gray">
        <MdOutlineTune size={23} />
      </HoverCircleBackground>
    </div>
  );
};

export default Search;
