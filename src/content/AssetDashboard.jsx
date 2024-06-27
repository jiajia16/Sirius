import "./AssetDashboard.css";

export default function AssetDashboard() {
  return (
    <div className="display-area">
      <div className="row">
        <div className="item">
          <h3>Active Alarms</h3>
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
          <h3>Active Alarms</h3>
        </div>
      </div>
    </div>
  );
}
