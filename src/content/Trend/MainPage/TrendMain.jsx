import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table, TableBody, Typography, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Box, TextField, MenuItem, Select, FormControl, InputLabel,
} from "@mui/material";
import assetsData from './assetsData.json'; // Import the JSON data

export default function AssetTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); // For search functionality
  const [selectedGroup, setSelectedGroup] = useState(""); // For asset group filtering
  const navigate = useNavigate();

  useEffect(() => {
    setData(assetsData);
  }, []);

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
    setPage(0); // reset to the first page when a new search is made
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter((row) => {
    return (
      row.asset.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGroup === "" || row.assetGroup === selectedGroup)
    );
  });

  // get unique asset groups for the dropdown
  const assetGroups = [...new Set(data.map((row) => row.assetGroup))];

  return (
    <Box sx={{ maxWidth: "10000px", margin: "0 auto" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mb: 2, gap: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Assets"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1 }}
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
