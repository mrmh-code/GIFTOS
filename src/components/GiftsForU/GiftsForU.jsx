import React from 'react';
import {Grid} from "@mui/material";
import HomeTextLeft from "@/modules/Home/HomeTextLeft";
import HomePersonRight from "@/modules/Home/HomePersonRight";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PREFIX='HomeText';

const classes = {
    textH3: `${PREFIX}-textH3`,
    imgResponsive:`${PREFIX}-imgResponsive`
};

const StyledBox=styled(Box)({
    marginTop:'60px',
    background:'#6929A5'
})

const StyleBox=styled(Box)(({ theme }) => ({
    marginLeft:'70px',
    marginTop:'130px',

    [`.${classes.textH3}`]:{
        color:'white',
        fontWeight:'600',
        fontSize:'50px'
    },
        [theme.breakpoints.down("md")]: {
            marginTop:'0px',
            marginBottom:'100px',
            marginLeft:'10%'
        }

}
));


const StyledButton1=styled(Button)({
    marginTop:"20px",
    background:'white',
    padding:'8px 29px',
    color:'black',
    fontSize:'15px',
    fontWeight:'100',

    '&:hover': {
        background:'#6929A5',
        border:'1px solid white',
        color: 'white9242DD',
    },
})

const StyledButton2=styled(Button)({
    marginTop:"20px",
    marginLeft:'20px',
    background:'#9242DD',
    padding:'8px 29px',
    color:'white',
    fontSize:'15px',
    fontWeight:'100',

    '&:hover': {
        background:'#6D2BAB',
        border:'1px solid white',
        color: 'white',
    },
})


const ResponsiveControl = styled(Box)(({ theme }) => ({


    [`.${classes.imgResponsive}`]:{
        [theme.breakpoints.down("sm")]: {
            width:'300px',
            height:'280px',
            marginLeft:'5%',

},

        [theme.breakpoints.between("sm",'md')]: {
            width:'500px',
            height:'500px',
            marginLeft:'5%',

        }
    }
}));


const GiftsForU = () => {
    return (
        <StyledBox>
            <ResponsiveControl>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                 <Box sx={{padding:'20px'}}>

                     <img
                         src="https://i.ibb.co/6bHn19Z/gifts.png"
                         alt="My Image"
                         width={400}
                         className={classes.imgResponsive}
                     />

                 </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={8} >
                    <StyleBox>
                        <Typography variant="h3" className={classes.textH3} gutterBottom>
                            GIFTS FOR YOUR<br/>
                            LOVED ONES
                        </Typography>

                        <Typography variant="p" gutterBottom sx={{color:'white'}}>
                            Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                        </Typography>
                        <br/>
                        <StyledButton1>BUY NOW </StyledButton1>
                        <StyledButton2>SEE MORE</StyledButton2>


                    </StyleBox>
                </Grid>

            </Grid>
            </ResponsiveControl>
        </StyledBox>
    );
};

export default GiftsForU;