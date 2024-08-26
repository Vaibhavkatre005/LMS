import React from "react";
import { Routes, Route } from "react-router-dom";
import Course from "../../pages/admin/course/Course";

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={
        <>
          <Course />
        </>
      } />
    </Routes>
  );
};

export default DashboardRoute;
