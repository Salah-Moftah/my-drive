import logo from "../assets/Google-Drive-Logo-700x394.png";
import Search from "./Search";
import { navList } from "../constants";
import HoverCircleBackground from "./HoverCircleBackground";

const NavBar = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Drive</span>
      </div>
      <div className="navigation">
        <Search />
        <div className="icons">
          {navList.map((icon) => (
            <HoverCircleBackground key={icon.id}>
              <img src={icon.icon} alt={icon.name} />
            </HoverCircleBackground>
          ))}
          <div className="avatar">
            <img src='src/assets/avatar.png' alt='avatar' />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
