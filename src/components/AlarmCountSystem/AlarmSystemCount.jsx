import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "../../content/Asset/Dashboard/AssetDashboard.css";

export default function AlarmSystemTrend() {
  const data = [
    { system: "System A", high: 4 },
    { system: "System B", high: 3 },
    { system: "System C", high: 5 },
    { system: "System D", high: 6 },
    { system: "System E", high: 8 },
    { system: "System F", high: 9 },
    { system: "System G", high: 7 },
  ];

  return (
    <div className="bar-chart-container">
      <BarChart
        xAxis={[{ scaleType: "band", data: data.map((item) => item.system) }]}
        series={[{ data: data.map((item) => item.high), color: "#c3f833" }]}
        width={650}
        height={150}
      />
    </div>
  );
}
