import React from "react";
import { FaGithub } from 'react-icons/fa';
import { Box, Stack } from "@mui/material"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";


const App = () => {
    return (
        <>
            <Box
                position="fixed"
                width="100%"
                sx={{ zIndex:"1" }}
            >
                <nav>
                    <a 
                        href="https://www.gonza.gr/" 
                        target="_blank"
                    >
                        <img src="/logo.png" alt="logo" className='logo' /> 
                    </a>
                    <a 
                        href="https://github.com/gonzagramaglia/social" 
                        className='github-logo-container'
                        target="_blank"
                    >
                        <FaGithub size={23} style={{ color: '#a9a6c3' }} />
                    </a>
                </nav>
            </Box>
            <Box>
                <Navbar /> 
                <Stack direction="row" spacing={ {xs:0, sm:2} } justifyContent="space-between" >
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                    <Add />
                </Stack>
            </Box>
        </>
    )
}

export default App