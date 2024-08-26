import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../../../pages/admin/course/Course'

const CourseCategoryRoute = () => {
  return (
    <>
          <Routes>
                <Route path="/course-category" element={
                    <>
                        <Course />
                    </>
                } />
            </Routes>
    </>
  )
}

export default CourseCategoryRoute
