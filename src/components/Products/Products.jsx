import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid, Stack} from "@mui/material";
import Gift from "@/modules/products/Gift";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";


const gifts=[
    {
        img:'https://i.ibb.co/Y01whJm/p1.png',
        title:'Ring',
        price:'200',
    },
    {
        img:'https://i.ibb.co/DLyJ1Q2/p2.png',
        title:'Watch',
        price:'300',
    },

    {
        img:'https://i.ibb.co/ZcdmBh0/p3.png',
        title:'Ring',
        price:'110',

    },
    {
        img:'https://i.ibb.co/FBRNY28/p4.png',
        title:'Flower Bouquet',
        price:'45',

    },
    ,
    {
        img:'https://i.ibb.co/ySY68xq/p5.png',
        title:'teddy Bear',
        price:'95',

    },

    ,
    {
        img:'https://i.ibb.co/0jRr953/p6.png',
        title:'Flower Bouquet',
        price:'70'
    },

    ,
    {
        img:'https://i.ibb.co/cDfr2RY/p7.png',
        title:'watch',
        price:'400'
    }
    ,
    {
        img:'https://i.ibb.co/K7HW6fM/p8.png',
        title:'Ring',
        price:'450'
    }


]

const StyledButton=styled(Button)({
    marginTop:"40px",
    background:'#F16179',
    padding:'8px 29px',
    color:'white',
    fontSize:'15px',
    fontWeight:'100',
    marginBottom:'50px',

    '&:hover': {
        background:'none',
        border:'1px solid #DB4566',
        color: '#F16179',
    },
})

const Products = () => {
    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                mt={5}
                mb={5}
            >
            <Typography variant="h3"  >
                LATEST PRODUCTS
            </Typography>

            </Stack>

            <Grid container spacing={3}>
                {
                gifts.map((value,index)=>(
                    <Grid   item xs={12} sm={6} md={3}>
                        <Gift key={index} gift={value}/>
                    </Grid>
                ))
                }

            </Grid>

            <Box sx={{ display:'flex', justifyContent:'center'}}>
               <StyledButton>View All Products</StyledButton>
            </Box>
        </Box>
    );
};

export default Products;