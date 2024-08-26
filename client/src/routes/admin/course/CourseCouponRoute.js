import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../../../pages/admin/course/Course'

const CourseCouponRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/coupon" element={
                    <>
                        <Course />
                    </>
                } />
            </Routes>
        </>
    )
}

export default CourseCouponRoute
