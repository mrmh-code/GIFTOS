import React from 'react';
import {Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled,makeStyles} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const PREFIX='BestSaving';

const classes = {
    textH3: `${PREFIX}-textH3`,
    imgResponsive:`${PREFIX}-imgResponsive`

};

const StyleBox=styled(Box)(({ theme }) => ({
    marginLeft:'70px',
    marginTop:'50px',

    [`.${classes.textH3}`]:{
        color:'white',
        fontWeight:'600',
        fontSize:'40px'
    }
    ,
    [theme.breakpoints.down("sm")]: {
        marginLeft:'5%',
        marginTop:'30px',
        marginBottom:'60px'
    },

    [theme.breakpoints.between("sm",'md')]: {
        marginLeft:'10%',
        marginTop:'30px',
        marginBottom:'60px'
    },


}));

const StyledButton1=styled(Button)({
    marginTop:"20px",
    background:'#109DBD',
    padding:'8px 29px',
    color:'white',
    fontSize:'15px',
    fontWeight:'100',

    '&:hover': {
        background:'none',
        border:'1px solid #109DBD',
        color: '#109DBD',
    },
})

const StyledButton2=styled(Button)({
    marginTop:"20px",
    marginLeft:'20px',
    background:'white',
    padding:'8px 29px',
    color:'black',
    fontSize:'15px',
    fontWeight:'100',

    '&:hover': {
        background:'7FD7EB',
        border:'1px solid white',
        color: 'white',
    },
})

const ResponsiveControl= styled(Box)(({ theme }) => ({

    // [theme.breakpoints.down("sm")]: {
    //     // display:'none'
    // },

    [`.${classes.imgResponsive}`]:{
        width:'500px',
        [theme.breakpoints.down("sm")]: {
           width:'280px',
            height:'230px',
            marginLeft:'5%'
        },

        [theme.breakpoints.between("sm",'md')]: {
            width:'500px',
            height:'400px',
            marginLeft:'5%'
        },
    }
}));

const BestSaving = () => {

    return (
    <ResponsiveControl>
            <Grid container spacing={2} sx={{background:'#7FD7EB',padding:'10px'}}>
                <Grid item xs={12} md={6}>

                    <img
                        src="https://i.ibb.co/fXLHhkH/saving-img.png"
                        alt="My Image"
                        className={classes.imgResponsive}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <StyleBox>
                        <Typography variant="h3" className={classes.textH3} gutterBottom>BEST SAVINGS ON <br/>
                            NEW ARRIVALS
                        </Typography>

                        <Typography variant="p" gutterBottom sx={{color:'white'}}>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                        </Typography>
                        <br/>
                        <StyledButton1>CONTACT US</StyledButton1>
                        <StyledButton2>See More</StyledButton2>
                    </StyleBox>
                </Grid>

            </Grid>
    </ResponsiveControl>
    );
};

export default BestSaving;