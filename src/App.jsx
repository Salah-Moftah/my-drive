import Sidebar from "./components/Sidebar";
import SidePanel from "./components/SidePanel";
import "../public/css/sidebar.css";
import "../public/css/main-content.css";
import "../public/css/side-panel.css";
import "../public/css/navbar.css";
import { MdArrowForwardIos } from "react-icons/md";
import NavBar from "./components/NavBar";


function App() {
  return (
    <main className="home-page">
      <header>
        <NavBar />
      </header>
      <div className="sections-area">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content"></div>
        <div className="side-panel">
          <SidePanel />
        </div>
        <div className="show-side-panel">
          <MdArrowForwardIos className="arrow" size={15} />
        </div>
      </div>
    </main>
  );
}

export default App;
