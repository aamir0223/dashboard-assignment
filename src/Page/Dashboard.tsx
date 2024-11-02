import React, { useEffect, useState } from 'react'
import Papa from 'papaparse';
import SideBar from '../Components/SideBar';
import Body from '../Components/Body';


const Dashboard = () => {
    const [jsonData, setJsonData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);


    useEffect(() => {
        fetch('../Electric_Vehicle_Population_Data.csv')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((csvText) => {
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
        <div className="content">
            <div className="pages">
                <div className="bg_circle-wrapper">
                    <div className="circle circle-one" />
                    <div className="circle circle-two" />
                    <div className="circle circle-three" />
                </div>

                <div className='dashboard'>
                    <div className='left-side'>
                        <SideBar />
                    </div>
                    <div className='right-side'>

                        <Body data={jsonData} />


                    </div>
                </div>

            </div>
        </div>


    )
}

export default Dashboard