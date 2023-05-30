import { Box, AppBar, styled, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
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
    const [isOpen, setIsOpen] = useState(false)
    return (
         <AppBar 
            position="sticky"
            sx={ { padding:{ lg:"0px 80px", md:"0px 40px", sm: "0px 25px" } } }
        >
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
                        sx={ { width:30, height:30 } }
                        src="/one-piece/luffy-profile-one.jpeg" 
                        onClick={ () => setIsOpen(true) }
                    />
                </IconsContainer>
            </StyledToolbar>
            <Menu
                id="x"
                aria-labelledby="x"
                open={isOpen}
                onClose={ () => setIsOpen(false) }
                PaperProps={{
                    style: {
                      marginTop: '105px',
                    },
                  }}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </Menu>
         </AppBar>
    )
}

export default Navbar