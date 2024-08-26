import React from "react";
import { Routes, Route } from "react-router-dom";
import Course from "../../../pages/admin/course/Course";

const CourseRoute = () => {
    return (
        <Routes>
            <Route path="/course" element={
                <>
                    <Course />
                </>
            } />
        </Routes>
    );
};

export default CourseRoute;