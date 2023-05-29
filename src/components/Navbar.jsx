import { Box, AppBar, styled, Toolbar, Typography, InputBase, Badge, Avatar} from "@mui/material";
import { Groups3, Mail, Notifications } from "@mui/icons-material"
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    color: "black"
}))

const IconsContainer = styled(Box)(({theme }) => ({
    display:"flex", 
    flexDirection:"row", 
    gap:"15px", 
    alignItems:"center"
})) 

const Navbar = () => {
    return (
         <AppBar position="sticky">
            <StyledToolbar>
                <Box sx={ { display:"flex", flexDirection:"row", gap:"10px", alignItems:"center" } }>
                    <Groups3 />
                    <Typography variant="h6" sx={ { display:{ xs:"none", sm:"block" } } }>Social</Typography>
                </Box>
                <Search>
                    <InputBase placeholder="Search" />
                </Search>
                <IconsContainer >
                    <Badge badgeContent={4} color="error" >
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error" >
                        <Notifications />
                    </Badge>
                    <Avatar 
                        sx={ { width:30, height:30 } }src="/one-piece/luffy-profile-one.jpeg" 
                    />
                </IconsContainer>
            </StyledToolbar>
         </AppBar>
    )
}

export default Navbar