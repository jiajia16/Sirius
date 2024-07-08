import "./LoginPage.css";

import BuildingImg from "../../assets/DysonStJamesBuilding.jpeg";
import SiriusLogo from "../..//assets/SiriusLoginLogo.png";
import BuildingLogo from "../../assets/dyson logo.png";

import {
  Box,
  Button,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginPage() {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container spacing={1}>
        <Grid xs={8} className="grid-box">
          <Box
            sx={{
              width: "85%",
              height: "85%",
            }}
          >
            <img
              className="cover-image"
              src={BuildingImg}
              alt="Building Image"
            />
          </Box>
        </Grid>
        <Grid
          xs={4}
          sx={{ flexDirection: "column", gap: 5, pr: 8 }}
          className="grid-box"
        >
          <img src={SiriusLogo} alt="Sirius Logo" />
          <img src={BuildingLogo} alt="Building Logo" />
          <Box
            sx={{
              display: "flex",
              width: "70%",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography sx={{ mb: 1 }}>Username</Typography>
            <TextField className="login-textfield" sx={{ mb: 4 }} />
            <Typography sx={{ mb: 1 }}>Password</Typography>
            <TextField className="login-textfield" sx={{ mb: 4 }} />
            <Box
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Remember me</Typography>
              <Switch />
            </Box>
            <Button
              variant="contained"
              href="/main"
              sx={{
                p: 2,
                backgroundColor: "black",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            >
              SIGN IN
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
