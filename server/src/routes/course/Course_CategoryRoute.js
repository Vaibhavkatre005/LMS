const express = require("express");
const CourseCateRoute = express.Router();
const upload = require("../../middleware/upload");
const CourseCateController = require("../../controller/course/Course_Category");


CourseCateRoute.get("/gettingCourseCategory", CourseCateController.getCourseCategoryData);
CourseCateRoute.get("/gettingCoureseCategoryWithId/:id", CourseCateController.getCourseCategoryWithId);
CourseCateRoute.post("/addingCourseCategory", upload.single('cate_thumbnail'), CourseCateController.addCourseCategoryData);
CourseCateRoute.put("/updatingCourseCategory", upload.single('cate_thumbnail'), CourseCateController.updateCourseCategoryData);
CourseCateRoute.delete("/deletingCourseCategory", CourseCateController.deleteCourseCategoryData);



module.exports = CourseCateRoute