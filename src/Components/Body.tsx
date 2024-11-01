import React, { useEffect, useState } from 'react'

import { ResponsivePie } from '@nivo/pie';
import Donald from './Donald';
import BarGraph from './BarGraph';

const colors = [
    "#59A3F5",
    "#91DDFE",
    "#147CF7",
    "#2756CD",
    "#3D6FF2",
    "#3E85B8",
    "#0FA9FF",
    "#60A5FA",
    "#0E3FBF",
    "#ABE",
    "#7D97DB",
    "#88A9FF",
];
const Body: React.FC<{ data: any }> = ({ data }) => {

    const [vehicleTypeData, setVehicleTypeData] = useState<any>([]);
    const [topModelsData, setTopModelsData] = useState<any>([]);

    const [countryData, setCountryData] = useState<any>([]);
    const [modelData, setModelData] = useState<any>([]);


    useEffect(() => {
        if (data) {
            // Prepare data for Vehicle Type Distribution
            const makeTypeMap: any = {};
            const modelSalesMap: any = {};

            data.forEach((item: any) => {
                // Count Electric Vehicle Types
                const makeType = item['Make'];
                makeTypeMap[makeType] = (makeTypeMap[makeType] || 0) + 1;

                // Count Vehicles by Model
                const model = item['Model'];
                modelSalesMap[model] = (modelSalesMap[model] || 0) + 1;
            });
            // Get top two models
            const sortedModels = Object.keys(modelSalesMap)
                .map((model: any, index: any) => ({ id: model, value: modelSalesMap[model], color: colors[index] }))
                .sort((a, b) => b.value - a.value) // Sort by sales count descending
                .slice(0, 2); // Get top two models

            const sortedMake = Object.keys(makeTypeMap)
                .map((model, index) => ({ id: model, value: makeTypeMap[model], color: colors[index] }))
                .sort((a, b) => b.value - a.value) // Sort by sales count descending
                .slice(0, 2);

            setVehicleTypeData(sortedMake);
            setTopModelsData(sortedModels);
        }
    }, [data]);

    useEffect(() => {
        if (data) {
            const countryCount: Record<string, number> = {};
            const modelCount: Record<string, number> = {};

            data.forEach((item: any) => {
                const country = item['County']; // Assuming a 'Country' field exists
                const model = item['Model'];

                // Count vehicles by Country
                if (country) {
                    countryCount[country] = (countryCount[country] || 0) + 1;
                }

                // Count vehicles by Model
                if (model) {
                    modelCount[model] = (modelCount[model] || 0) + 1;
                }
            });

            // Prepare data for the first Pie Chart (Country Distribution)
            const processedCountryData = Object.keys(countryCount).map((key) => ({
                id: key,
                label: key,
                value: countryCount[key],
            }));

            // Prepare data for the second Pie Chart (All Vehicle Models)
            const processedModelData = Object.keys(modelCount).map((key) => ({
                id: key,
                label: key,
                value: modelCount[key],
            }));

            setCountryData(processedCountryData);
            setModelData(processedModelData);
        }
    }, [data]);


    return (
        <div className='body'>
            <div className='top-body'>
                <BarGraph data={data} />
                <div className='top-pie-chart'>
                    <Donald data={vehicleTypeData} heading="Top Make" />

                    <Donald data={topModelsData} heading="Top Model" />

                </div>
            </div>
            <div className='top-body'>
                <div className='top-pie-chart'>


                </div>
            </div>

        </div>
    )
}

export default Body