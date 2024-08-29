import React from "react";
import { Typography, Box } from "@mui/material";
import DataTable from "./components/DataTable";

export default function CrmContent({ title }) {
  return (
    <Box sx={{ height: "75vh", width: "100%" }}>
      <Typography>{title}</Typography>
      <DataTable></DataTable>
    </Box>
  );
}
