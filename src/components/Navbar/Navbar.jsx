import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from "@mui/material/styles";
import { Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';


 

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

  
  
const drawerWidth = 240;
const navItems = ['Home', 'SHOP', 'WHY US','TESTIMONIAL', 'CONTACT US'];



const pages = ['Home', 'SHOP', 'WHY US','TESTIMONIAL', 'CONTACT US'];

const Navbar = (props) => {


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          ICON
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <StyleBox>
           <AppBar component="nav" position="static" className={classes.appBar} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block',md:'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ICON
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', lg:'block'} }}>
            {navItems.map((item) => (
              <Button key={item} sx={{my: 2, color: 'black'}}>
                {item}
              </Button>
            ))}

        <Button sx={{my: 2, color: 'black'}}>
                <PersonIcon/> Login
        </Button>

        <Button sx={{my: 2, color: 'black'}}>
           Cart <ShoppingCartIcon/>
        </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm:'block'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

         
        </StyleBox>
    );
};

export default Navbar;