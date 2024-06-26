import { FaHome, FaUserAlt } from "react-icons/fa";
import {
  BsBarChartLineFill,
  BsBox2Fill,
  BsBriefcaseFill,
  BsCalendar2EventFill,
  BsClipboard2Fill,
  BsGearFill,
  BsMegaphoneFill,
  BsWrench,
} from "react-icons/bs";
import "./SideMenu.css";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <div className="menu-item">
        <FaHome className="icon" />
        <span>Home</span>
      </div>
      <div className="menu-item">
        <FaUserAlt className="icon" />
        <span>Admin</span>
      </div>
      <div className="menu-item">
        <BsMegaphoneFill className="icon" />
        <span>Alarm</span>
      </div>
      <div className="menu-item">
        <BsBriefcaseFill className="icon" />
        <span>Asset</span>
      </div>
      <div className="menu-item">
        <BsWrench className="icon" />
        <span>Maintenance</span>
      </div>
      <div className="menu-item">
        <BsCalendar2EventFill className="icon" />
        <span>Event</span>
      </div>
      <div className="menu-item">
        <BsBarChartLineFill className="icon" />
        <span>Trend</span>
      </div>
      <div className="menu-item">
        <BsClipboard2Fill className="icon" />
        <span>Work Order</span>
      </div>
      <div className="menu-item">
        <BsBox2Fill className="icon" />
        <span>Store</span>
      </div>
      <div className="menu-item">
        <BsGearFill className="icon" />
        <span>Setting</span>
      </div>
    </div>
  );
}
