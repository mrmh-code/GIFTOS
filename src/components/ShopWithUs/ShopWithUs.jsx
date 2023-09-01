import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {styled} from "@mui/material/styles";


const PREFIX='shopWithUs';

const classes ={
    iconStyle: `${PREFIX}-iconStyle`,

};

const StyledBox=styled(Box)({
    textAlign:'center',
    background:"#F9F8F7",
    padding:'60px 10px',

    [`.${classes.iconStyle}`]:{
        fontSize:'40px',
        color:'#320B57'
    }
})

const ShopWithUs = () => {
    return (
        <Box>
           <Box sx={{display:'flex',justifyContent:'center',marginTop:'30px',marginBottom:'30px'}}>
               <Typography variant="h3"  gutterBottom>
                   WHY SHOP WITH US
               </Typography>
           </Box>

            <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={4}  >
                    <StyledBox>
                    <DeliveryDiningIcon className={classes.iconStyle} />
                    <Typography variant="h5">
                        Fast Delivery
                    </Typography>
                    <Typography variant="body1">
                        variations of passages of Lorem Ipsum available
                    </Typography>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  >
                    <StyledBox>
                        <AcUnitIcon className={classes.iconStyle}/>
                        <Typography variant="h5">
                            Fast Delivery
                        </Typography>
                        <Typography variant="body1">
                            variations of passages of Lorem Ipsum available
                        </Typography>
                    </StyledBox>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  >
                    <StyledBox>
                        <WorkspacePremiumIcon className={classes.iconStyle}/>
                        <Typography variant="h5">
                            Fast Delivery
                        </Typography>
                        <Typography variant="body1">
                            variations of passages of Lorem Ipsum available
                        </Typography>
                    </StyledBox>
                </Grid>

            </Grid>


        </Box>
    );
};

export default ShopWithUs;