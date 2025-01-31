import Sidebar from "./components/Sidebar";
import SidePanel from "./components/SidePanel";
import "../public/css/sidebar.css";
import "../public/css/mainContent.css";
import "../public/css/sidePanel.css";
import "../public/css/navbar.css";
import { MdArrowForwardIos } from "react-icons/md";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";


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
        <div className="main-content">
          <MainContent />
        </div>
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
