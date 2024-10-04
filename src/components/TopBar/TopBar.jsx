import "./TopBar.css";
import SiriusLogo from "../../assets/PrimusTech Logo.png";

import {
  VolumeUp,
  Notifications,
  Place,
  AccountCircle,
} from "@mui/icons-material";
import { Typography, Box, AppBar, Toolbar, IconButton } from "@mui/material";

export default function TopBar() {
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: 0, backgroundColor: "transparent" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, ml: 6 }}>
            <img
              src={SiriusLogo}
              alt="SiriusLogo"
              style={{ maxHeight: "5em", maxWidth: "5em" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              ml: 10,
              color: "black",
            }}
          >
            <VolumeUp sx={{ fontSize: 30 }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Place sx={{ fontSize: 30 }} />
              <Typography variant="body1">SCCC</Typography>
            </Box>

            <Notifications sx={{ fontSize: 30 }} />
            <AccountCircle sx={{ fontSize: 30 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    /* <div className="nav-bar">
      <div className="nav-logo">
        <img src={SiriusLogo} alt="Logo" className="nav-logo-img" />
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <VolumeUp sx={{ fontSize: 40 }} />
        </div>
        <div className="nav-item location">
          <Place sx={{ fontSize: 40 }} />
          <Typography variant="body1">SCCC</Typography>
        </div>
        <div className="nav-item">
          <Notifications sx={{ fontSize: 40 }} />
        </div>
        <div className="nav-item">
          <AccountCircle sx={{ fontSize: 40 }} />
        </div>
      </div>
    </div> */
  );
}
