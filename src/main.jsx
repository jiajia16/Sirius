import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import NotFoundPage from "./pages/Error/ErrorPage.jsx";

const App = () => (
  <Router basename="/Sirius">
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
