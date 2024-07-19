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

export default function ModuleItemMenu({ onButtonClick }) {
  return (
    <Box
      sx={{ height: "100%", display: "flex", border: "1px red solid", pt: 1 }}
    >
      <IconButton sx={{ color: "white" }} onClick={() => onButtonClick("main")}>
        <KeyboardArrowLeft />
      </IconButton>
      <Box sx={{ p: 1, color: "white" }}>
        {Object.keys(LIST_OF_ITEMS.asset).map((key) => (
          <Box key={key}>
            <Typography variant="h6">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Typography>
            <List>
              {LIST_OF_ITEMS.asset[key].map((item, index) => (
                <ListItemButton key={index}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
            <Divider sx={{ backgroundColor: "white", mb: 1 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
