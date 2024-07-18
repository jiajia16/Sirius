import "./MaintenanceDashboard.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";
import PieChartMaintenance from "../../../components/PieChartMaintenance/PieChartMaintenance";
import BarChartMaintenanceOverall from "../../../components/BarChartMaintenanceOverall/BarChartMaintenanceOverall";
import BarChartMaintenanceYearly from "../../../components/BarChartMaintenanceYearly/BarChartMaintenanceYearly";
import BarChartMaintenanceEachSys from "../../../components/BarChartMaintenanceEachSys/BarChartMaintenanceEachSys";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%", // Ensure each item takes the full height of its container
}));

const barChartData = [
  {
    name: "Aug-23",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Sep-23",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Oct-23",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Nov-23",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Dec-23",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Jan-24",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Feb-24",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Mar-24",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Apr-24",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "May-24",
    Scheduled: 0,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Jun-24",
    Scheduled: 1,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
  {
    name: "Jul-24",
    Scheduled: 6,
    Started: 0,
    Completed: 0,
    Closed: 0,
    Cancelled: 0,
    OverDue: 0,
  },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#a4de6c",
  "#d0d1e6",
  "#f4cae4",
];

export default function MaintenanceDashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container sx={{ flex: 1 }}>
        <Grid container item xs={12} sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ height: "93%" }}>
            <Item>
              <PieChartMaintenance />
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ height: "93%" }}>
            <Item>
              <BarChartMaintenanceOverall />
            </Item>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ height: "93%" }}>
            <Item>
              <BarChartMaintenanceYearly />
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ height: "93%" }}>
            <Item>
              <BarChartMaintenanceEachSys />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
