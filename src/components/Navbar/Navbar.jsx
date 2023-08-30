import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from "@mui/material/styles";


const PREFIX='Nav';

const classes = {
    appBar: `${PREFIX}-appBar`,

};

const StyleBox=styled(Box)({
    [`.MuiAppBar-root`]:{
        background:'#F9ECE6',
        color:'black',
        padding:' 0px 120px',
        borderRadius: "12px 12px 0px 0px;",
        height:'70px'
    }


})

const pages = ['Home', 'SHOP', 'WHY US','TESTIMONIAL', 'CONTACT US'];

const Navbar = () => {








    return (
        <StyleBox>
        <AppBar position="static" className={classes.appBar}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Box sx={{ flexGrow: 1,padding:'0px 100px', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}

                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            <PersonIcon/> Login
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            <ShoppingCartIcon/>
                        </Button>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
        </StyleBox>
    );
};

export default Navbar;