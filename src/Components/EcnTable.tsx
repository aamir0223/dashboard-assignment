import React from 'react';
import EcnStyledDataGrid from './EcnStyledDataGrid';

const ElectricVehicleTable: React.FC<{ data: any }> = ({ data }) => {
    // Ensure rows data is formatted correctly based on your incoming data prop
    const rowsWithIndex = data.map((vehicle: any, index: any) => ({
        id: index, // Use VIN as unique id for each row
        ...vehicle // Spread the rest of the vehicle properties
    }));

    const columns: any = [
        {
            field: "make",
            headerName: "Make",
            width: 150,
            renderCell: (params: any) => <div>{params.row.Make}</div>,
        },
        {
            field: "model",
            headerName: "Model",
            width: 150,
            renderCell: (params: any) => <div>{params.row.Model}</div>,
        },
        {
            field: "model_year",
            headerName: "Model Year",
            width: 120,
            renderCell: (params: any) => <div>{params.row["Model Year"]}</div>,
        },
        {
            field: "electric_range",
            headerName: "Electric Range (miles)",
            width: 180,
            renderCell: (params: any) => <div>{params.row["Electric Range"]}</div>,
        },
        {
            field: "city",
            headerName: "City",
            width: 120,
            renderCell: (params: any) => <div>{params.row.City}</div>,
        },
        {
            field: "county",
            headerName: "County",
            width: 120,
            renderCell: (params: any) => <div>{params.row.County}</div>,
        },
        {
            field: "state",
            headerName: "State",
            width: 80,
            renderCell: (params: any) => <div>{params.row.State}</div>,
        },
        {
            field: "vin",
            headerName: "VIN",
            width: 200,
            renderCell: (params: any) => <div>{params.row.VIN}</div>,
        },
    ];

    const handleOnCellClick = (params: any) => {
        // Handle cell click logic here
        console.log(params.row);
    };

    console.log("rowsWithIndex", rowsWithIndex)
    return (
        <div style={{ margin: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Electric Vehicle Data</h2>
            <EcnStyledDataGrid
                className="latest-vehicles-table"
                columns={columns}
                rows={rowsWithIndex}
                disableColumnMenu
                checkboxSelection={false}
                onCellClick={handleOnCellClick}
                getRowId={(row: any) => row.id} // Ensure VIN is used for row ID
                pagination
                pageSize={10} // Number of rows per page
                rowsPerPageOptions={[5, 10, 25]} // Options for page size

            />
        </div>
    );
}

export default ElectricVehicleTable;
