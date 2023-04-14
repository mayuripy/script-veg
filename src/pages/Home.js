import React from "react";
import Layout from "../components/Layout.js/Layout";
//import { Button } from '@mui/material'
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Box
        width={'100vw'}
        height={'60vh'}
        mt={'60px'}
  
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center right'
        }}
      >
        <Box 
         marginBottom={'60px'}
         alignItems={"left"}
         justifyContent={"center"}
         
        >
        <Typography 
        justifyContent={"center"} 
        fontSize={"45px"}
        fontWeight={"bold"}
        alignItems={"center"}
        paddingTop={"70px"}
        paddingLeft={"20px"}
        

        
        > 
           Food Website
        </Typography>
        <Typography
          fontSize={"40px"}
          fontWeight={"bold"}
          paddingLeft={"25px"}
          

          
        >
          Best Food In India
        </Typography>
        <Typography
          fontSize={"20px"}
          Color={"red"}
          paddingLeft={"20px"}
         >
        <Link
          color={"goldenrod"}
          fontSize="10px"
          to='/menu'
        >
          Order Now
        </Link>
        </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
