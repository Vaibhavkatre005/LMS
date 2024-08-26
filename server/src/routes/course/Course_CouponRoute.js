const express=require("express");
const CourseCoupon = express.Router();
const CourseCouponController = require("../../controller/course/Course_Coupon");

CourseCoupon.get("/gettingCourseCouponData", CourseCouponController.getCourseCouponData);
CourseCoupon.get("/gettingCourseCouponDataWithId/:id", CourseCouponController.getCourseCouponDataWithId);
CourseCoupon.post("/addingCourseCoupon", CourseCouponController.addCourseCouponData);
CourseCoupon.put("/updatingCourseCoupon", CourseCouponController.updateCourseCouponData);
CourseCoupon.delete("/deletingCourseCoupon", CourseCouponController.deleteCourseCouponData);



module.exports = CourseCoupon




