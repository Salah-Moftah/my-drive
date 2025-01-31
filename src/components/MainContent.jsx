import { IoMdArrowDropdown } from "react-icons/io";
import HoverCircleBackground from "./HoverCircleBackground";
import FilterDropdown from "./FilterDropdown";
import { filterList } from "../constants";
import ContentTable from "./ContentTable";
import ToggleSwitch from "./ToggleSwitch";

const MainContent = () => {
  return (
    <>
      <div className="content-header">
        <div className="content-head">
          <div className="my-drive-dropdown">
            <span className="my-drive-name">My Drive</span>
            <IoMdArrowDropdown />
          </div>
          <div className="layout">
            <div className="layout-btn">
              <ToggleSwitch />
            </div>
            <HoverCircleBackground>
              <img src="/imgs/info.svg" alt="info" />
            </HoverCircleBackground>
          </div>
        </div>
        <div className="filter-section">
          {filterList.map((n) => (
            <FilterDropdown key={n.id} name={n.name} />
          ))}
        </div>
      </div>
      
      <ContentTable />
    </>
  );
};

export default MainContent;
