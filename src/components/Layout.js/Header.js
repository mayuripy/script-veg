import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Dro,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [mobileopen, setmobileopen] = useState(false);

    const handalDrowerToggel = () => {
        setmobileopen(!mobileopen);
    };

    const Drawer = ( <
        Box onclick = { handalDrowerToggel }
        sx = {
            { taxtAlign: "center" }
        } >
        <
        Box sx = {
            { displayL: { xs: "none", sm: "block" } }
        } >
        <
        ul classname = "mobile-navigation" >
        <
        Link to = { "./" } > Home < /Link> <
        li >
        <
        Link to = { "../Menu" } > Menu < /Link> < /
        li > <
        li >
        <
        Link to = { "../About" } > About < /Link> < /
        li > <
        li >
        <
        Link to = { "../Contact" } > Contact < /Link> < /
        li > <
        /ul> < /
        Box > <
        /Box>
    );
    return ( <
        >
        <
        Box / >
        <
        AppBar Component = { "nav" }
        sx = {
            { bgcolor: "black" }
        } >
        <
        Toolbar >
        <
        IconButton color = "inherit"
        aria - label = "open drawer"
        edge = "start"
        sx = {
            { mr: 2, display: { sm: "none" } }
        } >
        <
        MenuIcon / >
        <
        /IconButton>

        <
        Typography color = { "goldenrod" }
        variant = "h6"
        component = "div"
        sx = {
            { flexGrow: "1" }
        } >
        <
        FastfoodIcon / >
        Crown <
        /Typography>

        <
        Box sx = {
            { displayL: { xs: "none", sm: "block" } }
        } >
        <
        ul classname = "navigation-menu" >
        <
        Link to = { "./" } > Home < /Link> <
        li >
        <
        Link to = { "../Menu" } > Menu < /Link> < /
        li > <
        li >
        <
        Link to = { "../About" } > About < /Link> < /
        li > <
        li >
        <
        Link to = { "../Contact" } > Contact < /Link> < /
        li > <
        /ul> < /
        Box > <
        /Toolbar> < /
        AppBar > <
        Box >
        <
        Drawer variant = "temporary"
        open = { mobileopen }
        onclose = { handalDrowerToggel }
        sx = {
            {
                display: { xs: "none", sm: "block" },
                "& .muiDrawer-paper": {
                    boxSiziing: "border-box",
                    width: "240px",
                },
            }
        } > { drawer } <
        /Drawer> < /
        Box > <
        />
    );
};

export default Header;