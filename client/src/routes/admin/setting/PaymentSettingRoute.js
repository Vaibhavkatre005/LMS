import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../../../pages/admin/course/Course'

const PaymentSettingRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/payment-setting" element={
                    <>
                        <Course />
                    </>
                } />
            </Routes>
        </>
    )
}

export default PaymentSettingRoute
