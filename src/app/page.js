"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Container from "@mui/material/Container";
import Products from "@/components/Products/Products";
import BestSaving from "@/components/BestSaving/BestSaving";
import ShopWithUs from "@/components/ShopWithUs/ShopWithUs";
import GiftsForU from "@/components/GiftsForU/GiftsForU";
import Testimonial from "@/components/Testimonial/Testimonial";


const Page = () => {


    return (
        <Container>
            <Header/>
            <Home/>
            <Products/>
            <Box sx={{marginTop:'20px'}}></Box>
            <BestSaving/>
            <ShopWithUs/>
            <GiftsForU/>
             <Testimonial/>
        </Container>

    );
};

export default Page;