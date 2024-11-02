import React, { useEffect, useState } from 'react'

import { ResponsivePie } from '@nivo/pie';
import Donald from './Donald';
import BarGraph from './BarGraph';
import PieChart from './PieChart';
import Lists from './Lists';
import ElectricVehicleTable from './ElectricVehicleTable';
import Metrics from './Metrics';
const colors = [
    "#59A3F5",
    "#91DDFE",
    "#147CF7",
    "#2756CD",

];
const Body: React.FC<{ data: any }> = ({ data }) => {

    const [vehicleTypeData, setVehicleTypeData] = useState<any>([]);
    const [topModelsData, setTopModelsData] = useState<any>([]);
    const [countryData, setCountryData] = useState<any>([]);
    const [modelData, setModelData] = useState<any>([]);
    const [hoverValue, setHoverValue] = useState<any>("");
    const [fuelTypeData, setFuelTypeData] = useState<any>([]);


    useEffect(() => {
        if (data) {
            const makeTypeMap: any = {};
            const modelSalesMap: any = {};
            const countryCount: Record<string, number> = {};
            const modelCount: Record<string, number> = {};

            data.forEach((item: any) => {
                const makeType = item['Make'];
                makeTypeMap[makeType] = (makeTypeMap[makeType] || 0) + 1;

                // Count Vehicles by Model
                const model = item['Model'];
                modelSalesMap[model] = (modelSalesMap[model] || 0) + 1;
            });
            // Get top two models
            const sortedModels = Object.keys(modelSalesMap)
                .map((model: any, index: any) => ({ id: model, value: modelSalesMap[model], color: colors[index + 1] }))
                .sort((a, b) => b.value - a.value) // Sort by sales count descending
                .slice(0, 2); // Get top two models

            const sortedMake = Object.keys(makeTypeMap)
                .map((model, index) => ({ id: model, value: makeTypeMap[model], color: colors[index + 1] }))
                .sort((a, b) => b.value - a.value) // Sort by sales count descending
                .slice(0, 2);

            data.forEach((item: any) => {
                const country = item['County']; // Assuming a 'Country' field exists
                const model = item['Model'];

                if (country) {
                    countryCount[country] = (countryCount[country] || 0) + 1;
                }

                if (model) {
                    modelCount[model] = (modelCount[model] || 0) + 1;
                }
            });

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

            setVehicleTypeData(sortedMake);
            setTopModelsData(sortedModels);

            setFuelTypeData(prepareFuelTypeData(data));
        }
    }, [data]);

    const prepareFuelTypeData = (data: any) => {
        const fuelCounts: any = {};

        data.forEach((vehicle: any) => {
            const type = vehicle["Electric Utility"];
            fuelCounts[type] = (fuelCounts[type] || 0) + 1;
        });

        return Object.keys(fuelCounts).map(type => ({ id: type, label: type, value: fuelCounts[type] }));
    };



    return (
        <div className='body'>
            {data && <Metrics data={data} />}
            <div className='pie-chart'>
                <div className=' lists-and-pie-v2'>
                    <div className="container">
                        <PieChart data={countryData} setHoverValue={setHoverValue} heading="Country Distribution" />
                        <Lists hoverValue={hoverValue} data={countryData} />
                    </div>
                </div>

                <div className=' lists-and-pie-v2'>
                    <div className="container">
                        <PieChart data={modelData} setHoverValue={setHoverValue} heading="All Vehicle Models" />
                        <Lists hoverValue={hoverValue} data={modelData} />
                    </div>
                </div>
            </div>

            <div className='top-body'>
                <BarGraph data={data} />
                <div className='top-pie-chart'>
                    <Donald data={vehicleTypeData} heading="Top Make" />
                    <Donald data={topModelsData} heading="Top Model" />

                </div>
            </div>

            <div className='third-section'>
                {data && <ElectricVehicleTable data={data} />}
                <div className='right-pie'>
                    <div className="container">
                        <PieChart data={fuelTypeData} setHoverValue={setHoverValue} heading="Fuel Type Distribution" />
                        <Lists hoverValue={hoverValue} data={fuelTypeData} />
                    </div>
                </div>


            </div>






        </div>
    )
}

export default Body