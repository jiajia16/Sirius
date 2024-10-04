import { LIST_OF_ITEMS } from "./ListOfModuleItems";
import {
  Divider,
  Box,
  List,
  Typography,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ModuleItemMenu({ onButtonClick, topic }) {
  return (
    <Box
      sx={{ height: "100%", display: "flex", border: "1px red solid", pt: 1 }}
    >
      <IconButton sx={{ color: "white" }} onClick={() => onButtonClick("main")}>
        <KeyboardArrowLeft />
      </IconButton>
      <Box sx={{ p: 1, color: "white" }}>
        {Object.keys(LIST_OF_ITEMS[topic]).map((key) => (
          <Box key={key}>
            <Typography variant="h6">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Typography>
            <List>
              {LIST_OF_ITEMS[topic][key].map((item, index) => {
                const itemWithoutSpaces = item.replace(/\s+/g, "");
                return (
                  <ListItemButton
                    LinkComponent={Link}
                    to={"/Sirius/main/" + topic + "/" + itemWithoutSpaces}
                    key={index}
                    sx={{ p: "0px 0px 0px 20px", m: 0 }}
                  >
                    <ListItemText primary={item} sx={{ p: 0, m: 0 }} />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
