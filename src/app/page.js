"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Container from "@mui/material/Container";
import Products from "@/components/Products/Products";


const Page = () => {


    return (
        <Container>
            <Header/>
            <Home/>
            <Products/>
        </Container>

    );
};

export default Page;