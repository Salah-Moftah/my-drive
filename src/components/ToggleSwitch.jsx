import "/public/css/toggleSwitch.css";
import { useState } from "react";
import { FiList, FiGrid } from "react-icons/fi";

const ToggleSwitch = () => {
  const [active, setActive] = useState("list");

  return (
    <div className="toggle-switch">
      <button
        className={`toggle-btn frist-btn ${active === "list" ? "active" : ""}`}
        onClick={() => setActive("list")}
      >
        <span className="icon-container">
          <FiList />
        </span>
      </button>
      <button
        className={`toggle-btn ${active === "grid" ? "active" : ""}`}
        onClick={() => setActive("grid")}
      >
        <span className="icon-container">
          <FiGrid />
        </span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
