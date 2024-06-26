import "./TopBar.css";
import SiriusLogo from "../../assets/PrimusTech Logo.png";
import { BsBellFill, BsFillGeoAltFill, BsFillVolumeUpFill, BsPersonCircle  } from "react-icons/bs"

export default function TopBar() {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={SiriusLogo} alt="Logo" className="nav-logo-img" />
      </div>
      <div className="nav-items">
        <div className="nav-item"><BsFillVolumeUpFill className="top-icon"/></div>
        <div className="nav-item location"><BsFillGeoAltFill className="top-icon"/><p>SCCC</p></div>
        <div className="nav-item"><BsBellFill className="top-icon"/></div>
        <div className="nav-item"><BsPersonCircle className="top-icon"/></div>
      </div>
    </div>
  );
}
