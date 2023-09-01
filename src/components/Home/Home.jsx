import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import HomeTextLeft from "@/modules/Home/HomeTextLeft";
import HomePersonRight from "@/modules/Home/HomePersonRight";
import {styled} from "@mui/material/styles";

const StyledBox=styled(Box)({
    background:'#F89CAB'
})




const Home = () => {
    return (
        <StyledBox>
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <HomeTextLeft/>
            </Grid>
            <Grid item   md={4}>
                <HomePersonRight/>
            </Grid>

        </Grid>

        </StyledBox>
    );
};

export default Home;