import React from 'react';
import {   Typography} from "@mui/material";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
       <>

           <Typography variant="h3">
               GIFTOS
           </Typography>

            <Navbar/>
       </>
    );
};

export default Header;