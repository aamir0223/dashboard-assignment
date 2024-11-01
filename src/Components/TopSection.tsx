import { KeyboardArrowDown } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const TopSection = () => {
    const [selectedId, setSelectedId] = useState<any>("");


    const selectHandler = (e: any) => {
        console.log("selectHandler")
    };
    return (
        <div className='top-section'>
            <div className='filter'>
                <FormControl fullWidth>
                    {selectedId === "" && (
                        <InputLabel
                            htmlFor={`select`}
                            shrink={!!(selectedId === "")}
                            className="label"
                        >
                            {"Select Events"}
                        </InputLabel>
                    )}

                    <Select
                        size="small"
                        placeholder={"SDsd"}
                        variant="standard"
                        disableUnderline
                        value={selectedId}

                        onChange={selectHandler}
                        IconComponent={KeyboardArrowDown}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left",
                            },

                            PaperProps: {
                                sx: {
                                    maxHeight: 300,
                                    boxShadow: 0,
                                    border: "1px solid rgba(0,0,0,0.2)",
                                    borderRadius: "8px",
                                    marginTop: "10px",
                                },
                            },
                        }}
                    >

                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>

                    </Select>
                </FormControl>
            </div>


            <div className='filter'>
                <FormControl fullWidth>
                    {selectedId === "" && (
                        <InputLabel
                            htmlFor={`select`}
                            shrink={!!(selectedId === "")}
                            className="label"
                        >
                            {"Select Events"}
                        </InputLabel>
                    )}

                    <Select
                        size="small"
                        placeholder={"SDsd"}
                        variant="standard"
                        disableUnderline
                        value={selectedId}

                        onChange={selectHandler}
                        IconComponent={KeyboardArrowDown}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left",
                            },

                            PaperProps: {
                                sx: {
                                    maxHeight: 300,
                                    boxShadow: 0,
                                    border: "1px solid rgba(0,0,0,0.2)",
                                    borderRadius: "8px",
                                    marginTop: "10px",
                                },
                            },
                        }}
                    >

                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>

                    </Select>
                </FormControl>
            </div>

            <div className='filter'>
                <FormControl fullWidth>
                    {selectedId === "" && (
                        <InputLabel
                            htmlFor={`select`}
                            shrink={!!(selectedId === "")}
                            className="label"
                        >
                            {"Select Events"}
                        </InputLabel>
                    )}

                    <Select
                        size="small"
                        placeholder={"SDsd"}
                        variant="standard"
                        disableUnderline
                        value={selectedId}

                        onChange={selectHandler}
                        IconComponent={KeyboardArrowDown}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left",
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left",
                            },

                            PaperProps: {
                                sx: {
                                    maxHeight: 300,
                                    boxShadow: 0,
                                    border: "1px solid rgba(0,0,0,0.2)",
                                    borderRadius: "8px",
                                    marginTop: "10px",
                                },
                            },
                        }}
                    >

                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>
                        <MenuItem className="list-item" >
                            sdcsd
                        </MenuItem>

                    </Select>
                </FormControl>
            </div>
        </div >
    )
}

export default TopSection