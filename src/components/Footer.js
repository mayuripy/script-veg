import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return ( <
        >
        <
        Box sx = {
            { textAlign: 'center', color: 'white', bgcolor: '#1A1A19', p: 3 } } >
        <
        Typography sx = {
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
        All Right Reserved & copy; Techinfo YT <
        /Typography> <
        /Box> <
        />
    )
}

export default Footer