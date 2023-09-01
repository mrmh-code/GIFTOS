"use client"
import React from 'react';
import Button from "@mui/material/Button";
import UpdateComponent from "@/hocs/HOC";

const Person1 = ({money,handleIncrease}) => {
    return (
        <div>
            <h2>Jhon is offering ${money}</h2>
            <Button onClick={handleIncrease}>Increase money</Button>

        </div>
    );
};

export default UpdateComponent(Person1);