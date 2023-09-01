import React from 'react';
import {Stack, Typography} from "@mui/material";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
       <>
        <Stack  direction="row" justifyContent="center">
            <Typography variant="h3">
                GIFTOS
            </Typography>
        </Stack>


            <Navbar/>
       </>
    );
};

export default Header;