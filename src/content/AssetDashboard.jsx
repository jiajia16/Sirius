import "./AssetDashboard.css";
import { useState } from "react";
import CircularProgress from "../components/CircularProgress/CircularProgress";
import AssetGrid from "../components/AssetGrid/AssetGrid";

export default function AssetDashboard() {
  const percent = 50;
  const totalAlarm = 118;
  const totalAlarmOnline = 108;
  const [percentage, setPercentage] = useState(88);

  return (
    <AssetGrid></AssetGrid>
  );
}
