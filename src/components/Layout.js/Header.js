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
        AppBar vomponebt = { "nav" }
        sax = {
            { bgcolor: "black" } } >
        <
        Toolbar >


        <
        Typography color = { 'goldenrod' }
        variant = 'h6'
        component = "div" >
        <
        FastfoodIcon / >
        My Restrurent <
        /Typography> <
        /Toolbar> <
        Box sx = {
            { displayL: { xs: "none", sm: "block" } } } >
        <
        ul classname = "navigation-menu" >
        <
        li to = { "./" } > Home < /li> <
        /ul> <
        ul >
        <
        li to = { "../menu" } > Menu < /li> <
        /ul> <
        ul >
        <
        li to = { "../about" } > About < /li> <
        /ul> <
        ul >
        <
        li to = { "../contact" } > Contact < /li> <
        /ul>

        <
        /Box>

        <
        /AppBar>









        <
        />



    )
}

export default Header