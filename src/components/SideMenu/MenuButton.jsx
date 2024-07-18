import { Button } from "@mui/material";

export default function MenuButton({ children, value, isSelected, onSelect }) {
  return (
    <Button
      onClick={onSelect}
      sx={{
        width: "80%",
        p: 1.5,
        display: "flex",
        textTransform: "none",
        justifyContent: value ? "flex-start" : "center",
        color: isSelected ? "#2e3e90" : "white",
        backgroundColor: isSelected ? "white" : "#2e3e90",
        borderRadius: value ? "10px 0 0 10px" : "10px",
        gap: 1,
        "&:hover": {
          color: "#2e3e90",
          backgroundColor: "white",
        },
      }}
    >
      {children}
    </Button>
  );
}
