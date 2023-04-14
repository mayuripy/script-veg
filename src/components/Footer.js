import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return ( 
        <>
        <Box sx = {
            { textAlign: 'center', color: 'white', bgcolor: '#1A1A19', p: 3 } } >
        <Box Box sx={{
              my:3,
              
              "& svg": {
                fontSize:"60px",
                alignItems:"center",
              curser:"pointer",
              mr:2,
              },
              "& svg:hover":{
                color:"goldenrod",
                transition:"all 400ms",
                transform:"translateX(5px)"
              }
              

        }}>
         
             <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <YouTubeIcon />
          
        
        </Box>
        
        <Typography sx = {
            {
                my: 3,
                "& svg": {
                    fontSize: "60px",
                    cursor: "pointer",
                    mr: 2,
                },
                "& svg:hover": {
                    color: 'goldenrod',
                    transform: 'translateX(5px)',
                    transition: 'all 400ms'
                }
            }
        } >
        All Right Reserved & copy; Techinfo YT 
        </Typography> 
        </Box> 
        
        </>
    )
}

export default Footer