import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CloseIcon from '@mui/icons-material/Close';
import AddHomeIcon from '@mui/icons-material/AddHome';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  const [mobileopen, setmobileopen] = useState(false);

  const handalDrowerToggel = () => {
    setmobileopen(!mobileopen);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: ["flex", "flex", "none"],
          position: "relative",
        }}
      >
        <IconButton onClick={handalDrowerToggel}>
          <MenuIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
          <Drawer
            open={mobileopen}
            anchor="right"
            
            sx={{
              width: '100vw',
              height: '80vh',
              backdropFilter: 'blur(10px)',
              
            }}S

            PaperProps={{
              sx: {
                 
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                width: '25vw',
                height:"60vh",
                display: 'flex',
              gap: '5vh',
              flexDirection: 'column',
              py: 3
              }
            }}
          >
        {/* <Fade in={mobileopen}> */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // position: "absolute",
              backgroundColor: "black",
              gap: "3vh",
              // top: "50px",
              // right: "20px",
              width: "100vw",
              height: '100vh',
              paddingX: "10px",
              paddingY: "10px",
              borderRadius: "10px",
            }}
          > */}

          <IconButton>
            <Button
              alignitem={"left"}
              paddingx={"2px"}
              marginTop={"20px"}
              onClick={() => setmobileopen(false)}
            >
              <CloseIcon />
            </Button>
          </IconButton>
            <Link
              to={"/"}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                textDecorationLine: "none",
                color: "white",
              
              }}
            >
              <AddHomeIcon />
              
              Home
            </Link>
            <Link
              to="/menu"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                textDecorationLine: "none",
                color: "white",
              }}
            >
              <MenuBookIcon />
              Menu
            </Link>
            <Link
              to="about"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                textDecorationLine: "none",
                color: "white",
              }}
            >
              <InfoIcon />
              About
            </Link>
            <Link
              t0="/contact"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                textDecorationLine: "none",
                color: "white",
              }}
            > 
              <ContactPageIcon />
              Contact
            </Link>
          {/* </Box> */}
        {/* </Fade> */}
        </Drawer>
      </Box>
      <Box
        sx={{
          display: ["none", "none", "flex"],
        }}
      >
        <Link
          to={"/"}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecorationLine: "none",
            color: "white",
          }}
        >
          Home
        </Link>
        <Link
          to="/menu"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecorationLine: "none",
            color: "white",
          }}
        >
          Menu
        </Link>
        <Link
          to="about"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecorationLine: "none",
            color: "white",
          }}
        >
          About
        </Link>
        <Link
          t0="/contact"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecorationLine: "none",
            color: "white",
          }}
        >
          
          Contact
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: "black",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handalDrowerToggel}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{
                flexGrow: "1",
              }}
            >
              <FastfoodIcon />
              Crown
            </Typography>
            {drawer}
          </Toolbar>
        </AppBar>
        <Box>
          {/* <Drawer
            variant="temporary"
            open={mobileopen}
            onclose={handalDrowerToggel}
            sx={{
              display: { xs: "none", sm: "block" },
              "& .muiDrawer-paper": {
                boxSiziing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer> */}
        </Box>
      </Box>
      {/* </Toolbar> */}

      {/* </Box>   */}
    </>
  );
};

export default Header;
