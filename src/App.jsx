import React, { useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";


const App = () => {

    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette:{
            mode: mode
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
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
            <Box bgcolor={"background.default"} color={"text.primary"} >
                <Navbar /> 
                <Stack direction="row" spacing={ {xs:0, sm:2} } justifyContent="space-between" >
                    <Sidebar mode={mode} setMode={setMode} />
                    <Feed />
                    <Rightbar />
                    <Add />
                </Stack>
            </Box>
        </ThemeProvider>
    )
}

export default App