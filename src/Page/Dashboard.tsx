import React, { useEffect, useState } from 'react'
import Papa from 'papaparse';

import TopSection from '../Components/TopSection';
import SideBar from '../Components/SideBar';
import Body from '../Components/Body';


const Dashboard = () => {
    const [jsonData, setJsonData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);


    useEffect(() => {
        // Fetch the CSV file from the public directory
        fetch('../Electric_Vehicle_Population_Data.csv')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((csvText) => {
                // Parse the CSV text into JSON
                Papa.parse(csvText, {
                    header: true, // Treat the first row as headers
                    skipEmptyLines: true, // Skip empty lines
                    complete: (results) => {

                        setJsonData(results?.data);
                        setLoading(false);
                    },
                    error: (error: any) => {
                        console.error('Error parsing CSV:', error);
                        setError(error);
                        setLoading(false);
                    }
                });
            })
            .catch((error) => {
                console.error('Error fetching CSV:', error);
                setError(error);
                setLoading(false);
            });
    }, []);


    console.log("jsonData", jsonData)

    return (
        <div className='dashboard'>
            <div className='left-side'>
                <SideBar />
            </div>
            <div className='right-side'>
                {/* <TopSection /> */}
                <Body data={jsonData} />


            </div>
        </div>
    )
}

export default Dashboard