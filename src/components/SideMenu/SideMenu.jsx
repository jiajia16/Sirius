import "./SideMenu.css";
import { useState } from "react";
import { Box } from "@mui/material";
import ModuleMenu from "./ModuleMenu.jsx";
import ModuleItemMenu from "./ModuleItemMenu.jsx";

export default function SideMenu() {
  const [clicked, setClicked] = useState("main");

  function handleClicked(clickedTopic) {
    setClicked(clickedTopic);
  }
  return (
    <Box className="side-menu-box">
      {clicked === "main" ? (
        <ModuleMenu onButtonClick={handleClicked} />
      ) : (
        <ModuleItemMenu onButtonClick={handleClicked} topic={clicked}/>
      )}
    </Box>
  );
}
