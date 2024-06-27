import "./AssetDashboard.css";
import { useState } from "react";
import CircularProgress from "../components/CircularProgress/CircularProgress";

export default function AssetDashboard() {
  const percent = 50;
  const totalAlarm = 118;
  const totalAlarmOnline = 108;
  const [percentage, setPercentage] = useState(88);

  return (
    <div className="display-area">
      <div className="row">
        <div className="item active-alarm-widget">
          <h3>Active Alarms</h3>
          <div className="container">
            <CircularProgress percentage={percentage} />
            <div className="title-value">
              <h3>Total</h3>
              <h1>{totalAlarm}</h1>
              <h3 className="online">Online</h3>
              <h1 className="online">{totalAlarmOnline}</h1>
            </div>
          </div>
        </div>
        <div className="item">
          <h3>Alarms Count Trend</h3>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <h3>Alarms by System Chart</h3>
        </div>
        <div className="item">
          <h3>Alarms by Priority Count</h3>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <h3>Alarm Information</h3>
        </div>
      </div>
    </div>
  );
}
