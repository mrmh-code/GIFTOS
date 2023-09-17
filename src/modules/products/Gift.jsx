import React from 'react';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";


const PREFIX='Gift';

const classes = {
    img: `${PREFIX}-img`,
    priceColor:`${PREFIX}-priceColor`,

};


const StyledStack=styled(Stack)({
    background:'#EEEEEE',
    padding:'10px',
    height:'280px',
    position:'relative',

    [`.${classes.img}`]:{
        marginTop:'60px'

    }
})

const StyledTypographyBody1=styled(Typography)({
    display:'inline',
    background:'white',
    fontSize:'16px',
    fontWeight:'400',
    padding:'9px',
    marginLeft:'0px',
    position:'absolute',
    borderRadius:'60%'
})

const StyledTypography1=styled(Typography)({
    marginTop:'40px',
    fontWeight:'500',
    // float:'left'
})

const StyledTypography2=styled(Typography)({
    marginTop:'40px',
    marginLeft:'60px',
    fontWeight:'500',
    // float:'right',

    [`.${classes.priceColor}`]:{
        color:'#DC5666'
    }



})

const Gift = (props) => {
    const {gift}=props
    return (
        <Box>
            <StyledStack >

                <Box>
                    <Link href={'/productDetails'}>
                    <StyledTypographyBody1 variant='body1'>New</StyledTypographyBody1>
                    <Stack direction="row" justifyContent="center">
                        <img className={classes.img} src={gift.img} width={130} height={130}/>
                    </Stack>

                   <Box sx={{display: "flex",
                       justifyContent:  "space-between"}}>
                       <StyledTypography1>{gift.title}</StyledTypography1>
                       <StyledTypography2>Price <span className={classes.priceColor}>${gift.price}</span> </StyledTypography2>
                   </Box>
                    </Link>
                </Box>

            </StyledStack>
        </Box>
    );
};

export default Gift;