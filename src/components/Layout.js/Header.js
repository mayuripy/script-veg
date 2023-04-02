import React from 'react'
import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { Link } from "react-router-dom"

function Header() {
    return ( <
        >
        <
        Box / >
        <
        AppBar Component = { "nav" }
        sx = {
            { bgcolor: "black" } } >



        <
        Typography color = { 'goldenrod' }
        variant = 'h6'
        component = "div"
        sx = {
            { flexGrow: "1" } } >
        <
        FastfoodIcon / >
        Crown <
        /Typography> <
        Toolbar >
        <
        Box sx = {
            { displayL: { xs: "none", sm: "block" } } }

        >
        <
        ul classname = "navigation-menu" >
        <
        Link to = { "./" } > Home < /Link> <
        li >
        <
        Link to = { "../Menu" } > Menu < /Link> <
        /li> <
        li >
        <
        Link to = { "../About" } > About < /Link> <
        /li> <
        li >
        <
        Link to = { "../Contact" } > Contact < /Link> <
        /li> <
        /ul> <
        /Box> <
        /Toolbar> <
        /AppBar>









        <
        />



    )
}

export default Header