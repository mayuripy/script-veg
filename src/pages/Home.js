import React from 'react'
import Layout from '../components/Layout.js/Layout'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


const Home = () => {
    return ( <
        Layout >
        <
        div className = 'home'
        style = {
            { backgroundImage: `url(${Banner})` } } >
        <
        div className = 'headcontainer' >
        <
        h1 > Food website < /h1> <
        p > Best Food in india < /p> <
        Link to = "/menu" >
        <
        button > ORDER NOW < /button> <
        /Link>

        <
        /div> <
        /div> <
        /Layout>
    )
}

export default Home