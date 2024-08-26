import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../pages/admin/layout/Sidebar";
import Brand from "../../pages/admin/brand/Brand";

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Sidebar />} />
      <Route path="/brand" element={<Brand />} />
    </Routes>
  );
};

export default DashboardRoute;
