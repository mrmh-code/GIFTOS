import React from 'react';
import Box from "@mui/material/Box";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {styled} from "@mui/material/styles";
import {Grid } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const StyledBox=styled((Box))({
    marginTop:'50px',
    background:'#2D2D2D',
    padding:'50px',
    color:'white',

    [`.spanTextColor`]:{
        color:'#a0a0a0',
        paddingLeft:'4px',
}
})

const StyledButton=styled(Button)({
    marginTop:"20px",
    background:'#F89CAB',
    padding:'8px 29px',
    color:'white',
    fontSize:'15px',
    fontWeight:'100',
    cursor:'pointer',

})

const Footer = () => {
    return (
        <div>
            <StyledBox>
                <Box sx={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
                    <FacebookIcon sx={{fontSize: '30px', margin: '5px'}}/>
                    <TwitterIcon sx={{fontSize: '30px', margin: '5px'}}/>
                    <InstagramIcon sx={{fontSize: '30px', margin: '5px'}}/>
                    <YouTubeIcon sx={{fontSize: '30px', margin: '5px'}}/>
                </Box>

                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6'>ABOUT US</Typography>
                            <Typography variant='p' sx={{color:'#a0a0a0'}}>
                                Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed<br/> doLorem ipsum
                                dolor sit amet,<br/> consectetur adipiscing elit, sed <br/> doLorem ipsum dolor sit
                                amet,
                            </Typography>

                        </Grid>
                        <Grid item   xs={12} sm={6} md={3}>
                            <Typography variant='h6'>Newsletter</Typography>
                            <OutlinedInput sx={{background: 'white', color: '#878679', height: '30px'}}
                                           placeholder='Enter your Email'/><br/>
                            <StyledButton>SUBSCRIBE</StyledButton>
                        </Grid>
                        <Grid item xs={3}  xs={12} sm={6} md={3}>
                            <Typography variant='h6'>NEED HELP</Typography>
                            <Typography variant='p' sx={{color:'#a0a0a0'}}>
                                Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed<br/> doLorem ipsum
                                dolor sit amet,<br/> consectetur adipiscing elit, sed <br/> doLorem ipsum dolor sit
                                amet,
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6'>CONTACT US</Typography>
                            <Box sx={{display:'flex',marginBottom:'10px'}}> <PlaceIcon/><span className='spanTextColor'>Dhaka 1205</span></Box>
                            <Box sx={{display:'flex',marginBottom:'10px'}}><LocalPhoneIcon/><span className='spanTextColor'> +0132342423</span> </Box>
                            <Box sx={{display:'flex',marginBottom:'10px'}}><EmailIcon/><span className='spanTextColor'>pet@gmail.com</span></Box>
                        </Grid>

                    </Grid>
                </Box>
            </StyledBox>
        </div>
    );
};

export default Footer;