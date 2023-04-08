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
        height={'40vh'}
        mt={'80px'}
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center right'
        }}
      >
        <Typography 
        textAlign={"center"}
         marginTop={"10px"}
        >
          Food Website
        </Typography>
        <Typography>
          Best Food In India
        </Typography>
        <Link
          to='/menu'
        >
          Order Now
        </Link>
      </Box>
    </Layout>
  );
};

export default Home;
