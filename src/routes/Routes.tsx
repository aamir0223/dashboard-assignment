import React from 'react'
import { Routes as AllRoutes, Route, Navigate } from "react-router-dom";
import Dashboard from '../Page/Dashboard';



const Routes = () => {
    return (
        <AllRoutes>
            <Route path="/Dashboard" element={<Dashboard />} />
        </AllRoutes>
    )
}

export default Routes