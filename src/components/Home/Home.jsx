import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import HomeTextLeft from "@/modules/Home/HomeTextLeft";
import HomePersonRight from "@/modules/Home/HomePersonRight";
import {styled} from "@mui/material/styles";

const StyleBox=styled(Box)({
    background:'#F89CAB'
})

const Home = () => {
    return (
        <StyleBox>
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <HomeTextLeft/>
            </Grid>
            <Grid item   md={4}>
                <HomePersonRight/>
            </Grid>

        </Grid>

        </StyleBox>
    );
};

export default Home;