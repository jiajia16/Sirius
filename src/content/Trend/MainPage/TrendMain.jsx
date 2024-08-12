import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table, TableBody, Typography, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Box, TextField, MenuItem, Select, FormControl, InputLabel,
} from "@mui/material";

const assetsData = [
  { asset: "AHU-04-1", description: "L2 Cultural Gallery", assetGroup: "AHU", assetCategory: "CAV", location: "L4" },
  { asset: "AHU-06-1", description: "L6 Recital Room", assetGroup: "AHU", assetCategory: "CAV", location: "L6" },
  { asset: "AHU-08-1", description: "L7 & 8 Pre-Function MPH-Front", assetGroup: "AHU", assetCategory: "CAV", location: "L8" },
  { asset: "AHU-08-2", description: "L9 Pre-Function Auditorium", assetGroup: "AHU", assetCategory: "CAV", location: "L8" },
  { asset: "AHU-08-3", description: "L9 Auditorium", assetGroup: "AHU", assetCategory: "CAV", location: "L8" },
  { asset: "AHU-08-4", description: "L7 & 8 Pre-Function MPH Back", assetGroup: "AHU", assetCategory: "CAV", location: "L8" },
  { asset: "AHU-08-5", description: "L7 Multi-Purpose Hall", assetGroup: "AHU", assetCategory: "CAV", location: "L8" },
  { asset: "AHU-11-1", description: "L9 Auditorium Backstage", assetGroup: "AHU", assetCategory: "CAV", location: "L11" },
  { asset: "AHU-11-2", description: "L9 Auditorium Stage", assetGroup: "AHU", assetCategory: "CAV", location: "L11" },
  { asset: "AHU-LR-1", description: "L10 Foyer, Rehearsal, Corridor", assetGroup: "AHU", assetCategory: "CAV", location: "LR" },
  { asset: "FCU-6-3", description: "Recital Storage", assetGroup: "FCU", assetCategory: "CHW", location: "L6" },
  { asset: "FCU-6-4", description: "Changing Room 1", assetGroup: "FCU", assetCategory: "CHW", location: "L6" },
  { asset: "FCU-6-5", description: "Changing Room 2", assetGroup: "FCU", assetCategory: "CHW", location: "L6" },
  { asset: "IAQ_SENSOR_1547", description: "IAQ SENSOR 1547", assetGroup: "SENSOR", assetCategory: "IAQ SENSOR", location: "SCCC" },
  { asset: "IOT-S500M-L10", description: "IOT-S500M-L10", assetGroup: "SENSOR", assetCategory: "IOT SENSOR", location: "L4" },
  // ... Add more entries as needed
];

export default function AssetTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); // For search functionality
  const [selectedGroup, setSelectedGroup] = useState(""); // For asset group filtering
  const navigate = useNavigate();

  const handleRowClick = (asset) => {
    navigate(`/Sirius/main/Trend/TrendCharts/${asset}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset to the first page when a new search is made
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setPage(0); // Reset to the first page when a new filter is applied
  };

  // Filter data based on search term and selected group
  const filteredData = assetsData.filter((row) => {
    return (
      row.asset.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGroup === "" || row.assetGroup === selectedGroup)
    );
  });

  // Get unique asset groups for the dropdown
  const assetGroups = [...new Set(assetsData.map((row) => row.assetGroup))];

  return (
    <Box sx={{ maxWidth: "10000px", margin: "0 auto" }}> {/* Adjust the maxWidth to make the box shorter */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mb: 2, gap: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Assets"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1 }} // Makes the search bar take up available space
        />
        <FormControl variant="outlined" size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Asset Group</InputLabel>
          <Select
            value={selectedGroup}
            onChange={handleGroupChange}
            label="Asset Group"
          >
            <MenuItem value="">All</MenuItem>
            {assetGroups.map((group, index) => (
              <MenuItem key={index} value={group}>
                {group}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Asset Group</TableCell>
              <TableCell>Asset Category</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index} onClick={() => handleRowClick(row.asset)} hover style={{ cursor: "pointer" }}>
                <TableCell>{row.asset}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.assetGroup}</TableCell>
                <TableCell>{row.assetCategory}</TableCell>
                <TableCell>{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography>
          Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredData.length)} of {filteredData.length} entries
        </Typography>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}
