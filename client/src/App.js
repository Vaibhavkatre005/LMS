import React from "react";
import DashboardRoute from "./routes/admin/DashboardRoute";
import CourseRoute from "./routes/admin/course/CourseRoute";
import CourseCouponRoute from "./routes/admin/course/CourseCouponRoute";
import CourseCategoryRoute from "./routes/admin/course/CourseCategoryRoute";
import NotificationSettingRoute from "./routes/admin/setting/NotificationSettingRoute";
import PaymentSettingRoute from "./routes/admin/setting/PaymentSettingRoute";

const App = () => {
  return (
    <>
      <DashboardRoute />
      <CourseRoute />
      <CourseCouponRoute />
      <CourseCategoryRoute />
      <NotificationSettingRoute />
      <PaymentSettingRoute />
    </>
  );
};

export default App;
