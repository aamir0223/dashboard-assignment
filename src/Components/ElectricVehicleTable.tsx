import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import React, { useState } from 'react';

const ElectricVehicleTable: React.FC<{ data: any }> = ({ data }) => {
    // Set the initial state for pagination
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6; // Set how many items to display per page

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (direction: string) => {
        if (direction === 'next' && currentPage < totalPages - 1) {
            setCurrentPage(prevPage => prevPage + 1);
        } else if (direction === 'prev' && currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    // Get the current data slice based on the current page
    const currentData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className='table-container'>
            <h2 >Electric Vehicle Data</h2>
            <div className='table'>

                <table style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th >Make</th>
                            <th >Model</th>
                            <th >Model Year</th>
                            <th >Electric Range (miles)</th>
                            <th >City</th>
                            <th >County</th>


                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((vehicle: any, index: any) => (
                            <tr key={index}>
                                <td >{vehicle.Make}</td>
                                <td >{vehicle.Model}</td>
                                <td >{vehicle["Model Year"]}</td>
                                <td >{vehicle["Electric Range"]}</td>
                                <td >{vehicle.City}</td>
                                <td >{vehicle.County}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination Controls */}

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 0}
                    style={{ padding: '10px', cursor: currentPage === 0 ? 'not-allowed' : 'pointer' }}
                >
                    <ChevronLeft style={{ color: currentPage === 0 ? 'grey' : 'black' }} />
                </button>
                <span className='page'>{`Page ${currentPage + 1} of ${totalPages}`}</span>
                <button
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages - 1}
                    style={{ padding: '10px', cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer' }}
                >
                    <ChevronRight style={{ color: currentPage === totalPages - 1 ? 'grey' : 'black' }} />
                </button>
            </div>
        </div>
    );
}

export default ElectricVehicleTable;
