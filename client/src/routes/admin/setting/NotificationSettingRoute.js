import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../../../pages/admin/course/Course'

const NotificationSettingRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/notification-setting" element={
                    <>
                        <Course />
                    </>
                } />
            </Routes>
        </>
    )
}

export default NotificationSettingRoute
