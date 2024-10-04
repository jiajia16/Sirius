import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function MenuButton({
  children,
  screenSize,
  isSelected,
  onSelect,
  component,
  onButtonClick,
}) {
  return (
    <Box
      sx={{
        p: 1,
        color: "black",
        width: "80%",
        backgroundColor: isSelected ? "white" : "#2e3e90",
        borderRadius: screenSize ? "10px 0 0 10px" : "10px",
        "&:hover": isSelected
          ? { backgroundColor: "white" }
          : {
              backgroundColor: "#28367d",
            },
      }}
    >
      <Button
        LinkComponent={Link}
        to={"/Sirius/main/" + onSelect + "/" + component}
        // onClick={onSelect}
        onClick={() => onButtonClick(onSelect)}
        sx={{
          width: "100%",

          display: "flex",
          textTransform: "none",
          justifyContent: screenSize ? "flex-start" : "center",
          gap: 1,
          color: isSelected ? "#2e3e90" : "white",
        }}
      >
        {children}
      </Button>
    </Box>
  );
}
