import React from 'react';

// Sample Metric component
const Metrics: React.FC<{ data: any }> = ({ data }) => {
    // Calculate metrics
    const totalVehicles = data?.length;
    const electricRanges = data?.map((vehicle: any) => parseFloat(vehicle['Electric Range'])).filter(Boolean);
    const averageRange = electricRanges?.length > 0 ? (electricRanges.reduce((a: any, b: any) => a + b, 0) / electricRanges.length).toFixed(2) : 0;
    const maxRange = Math?.max(...electricRanges)?.toFixed(2);
    const uniqueMakes = new Set(data?.map((vehicle: any) => vehicle.Make)).size;
    const uniqueModels = new Set(data?.map((vehicle: any) => vehicle.Model)).size;


    return (
        <div className='metrics'>
            <div className='metrics-card' >
                <h3>Total Vehicles</h3>
                <p>{totalVehicles}</p>
            </div>
            <div className='metrics-card' >
                <h3>Average Electric Range (miles)</h3>
                <p>{averageRange}</p>
            </div>
            <div className='metrics-card' >
                <h3>Max Electric Range (miles)</h3>
                <p>{maxRange}</p>
            </div>

            <div className='metrics-card' >
                <h3>Unique Makes</h3>
                <p>{uniqueMakes}</p>
            </div>
            <div className='metrics-card' >
                <h3>Unique Models</h3>
                <p>{uniqueModels}</p>
            </div>

        </div>
    );
};

export default Metrics;
