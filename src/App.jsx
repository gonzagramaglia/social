import React from "react";
import { FaGithub } from 'react-icons/fa';
import { Box, Stack } from "@mui/material"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar";


const App = () => {
    return (
        <>
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
            <Box>
                {/* <Navbar /> */}
                <Stack direction="row" spacing={2} justifyContent="space-between" >
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </Stack>
            </Box>
        </>
    )
}

export default App