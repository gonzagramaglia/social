import React, { useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";


const App = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const lightTheme = createTheme({
        palette: {
            primary: {
                main: "#20BB9A",
                minor: "#25DBB4"
            },
            secondary: {
                main: "#FAFAFA",
                medium: "#F0F0F0",
                minor: "#FFFFFF"
            },
            text: {
                main: "#171717",
                minor: "#828282"
            },
            icons: {
                main: "#060816",
                minor: "#060816"
            }
        }
    })

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#172159",
                minor: "#2E438C"
            },
            secondary: {
                main: "#060816",
                medium: "#0A0E26",
                minor: "#10153B"
            },
            text: {
                main: "#FAFAFA",
                minor: "#8C8C8C"
            },
            icons: {
                main: "#FAFAFA",
                minor: "#BABABA"
            }
        }
    })

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme} >
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
            <Box bgcolor={theme.palette.secondary.main} color={theme.palette.text.main}>
                <Navbar /> 
                <Stack direction="row" spacing={ {xs:0, sm:2} } justifyContent="space-between" >
                    <Sidebar theme={theme} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    <Feed theme={theme} />
                    <Rightbar theme={theme} />
                    <Add theme={theme} />
                </Stack>
            </Box>
        </ThemeProvider>
    )
}

export default App