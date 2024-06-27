import "./App.css";

import SideMenu from "./components/SideMenu/SideMenu.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import AssetDashboard from "./content/AssetDashboard.jsx";

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <section>
        <SideMenu></SideMenu>
        <AssetDashboard></AssetDashboard>
      </section>
    </div>
  );
}

export default App;
