import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

const PREFIX='HomeText';

const classes = {
    textH3: `${PREFIX}-textH3`,

};

const StyleBox=styled(Box)({
    marginLeft:'70px',
    marginTop:'130px',

    [`.${classes.textH3}`]:{
        color:'white',
        fontWeight:'600',
        fontSize:'50px'
    }
    ,



})

const StyledButton=styled(Button)({
    marginTop:"20px",
    background:'#DB4566',
    padding:'8px 29px',
    color:'white',
    fontSize:'15px',

    '&:hover': {
        background:'none',
        border:'1px solid #DB4566',
        color: '#DB4566',
    },
})

const HomeTextLeft = () => {
    return (
        <StyleBox>
            <Typography variant="h3" className={classes.textH3} gutterBottom>
                Welcome To Our<br/>
                Gift Shop
            </Typography>

            <Typography variant="p" gutterBottom sx={{color:'white'}}>
                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
            </Typography>

            <StyledButton >CONTACT US</StyledButton>

        </StyleBox>
    );
};

export default HomeTextLeft;