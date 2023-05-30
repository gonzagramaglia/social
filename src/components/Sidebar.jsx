import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { AccountBox as Profile, Article as Pages, Group, Home, ModeNight, Person, Settings, Storefront as Shop } from "@mui/icons-material";

const Sidebar = ({ theme, isDarkMode, setIsDarkMode }) => {
    return (
        <Box 
            flex={1.5} 
            p={2} 
            sx={ { display: { xs:"none", sm:"flex" } } }
            justifyContent="right"
            minWidth={170}
        >
            <Box
                position="fixed"
                width="100"
                sx={{ marginTop:"152px" }}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                            <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <Profile sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <Person sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#groups">
                            <ListItemIcon>
                                <Group sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Pages sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#shop">
                            <ListItemIcon>
                                <Shop sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <ListItemText primary="Shop" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#settings">
                            <ListItemIcon>
                                <Settings sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#night-mode">
                            <ListItemIcon>
                                <ModeNight sx={{ color: theme.palette.icons.main }} />
                            </ListItemIcon>
                            <Switch
                            onChange={() => setIsDarkMode(!isDarkMode)}
                            sx={{
                                "& .MuiSwitch-thumb": {
                                    backgroundColor: theme.palette.text.main 
                                },
                                "& .MuiSwitch-track": {
                                    backgroundColor: theme.palette.text.minor 
                                },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar