import { FiPlus } from "react-icons/fi";
import { sidePanelIcons } from "../constants";
import HoverCircleBackground from "./HoverCircleBackground";

const LeftBar = () => {
  return (
    <div className="icons-area">
      {sidePanelIcons.map((icon) => (
        <HoverCircleBackground color={icon.colorBackground} key={icon.id}>
          <img src={`${icon.icon}`} alt={icon.name} />
        </HoverCircleBackground>
      ))}
      <div className="line" />
      <HoverCircleBackground>
        <FiPlus size={20} />
      </HoverCircleBackground>
    </div>
  );
};

export default LeftBar;
