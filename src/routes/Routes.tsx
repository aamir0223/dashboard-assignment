import React from 'react'
import { Routes as AllRoutes, Route, Navigate } from "react-router-dom";
import Dashboard from '../Page/Dashboard';
import CsvToJsonConverter from '../Page/CsvToJsonConverter';


const Routes = () => {
    return (
        <AllRoutes>
            <Route path="/Dashboard" element={<CsvToJsonConverter />} />
        </AllRoutes>
    )
}

export default Routes