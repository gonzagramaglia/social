import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
  
const Rightbar = () => {
    return (
        <Box 
            flex={2} 
            p={2} 
            sx={{ display: { xs: "none", md: "block" } }}
            minWidth={235}
        >
            <Box position="fixed" width={250}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar
                        alt="Shanks"
                        src="/one-piece/shanks-profile.webp"
                    />
                    <Avatar
                        alt="Rayleigh"
                        src="/one-piece/rayleigh-profile.webp"
                    />
                    <Avatar
                        alt="Hancock"
                        src="/one-piece/hancock-profile.jpeg"
                    />
                    <Avatar
                        alt="Sabo"
                        src="/one-piece/sabo-profile.avif"
                    />
                    <Avatar 
                        alt="Koby" 
                        src="/one-piece/koby-profile.jpeg" 
                    />
                    <Avatar
                        alt="Vivi"
                        src="/one-piece/vivi-profile.avif"
                    />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                    <Avatar alt="" src="" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                        <React.Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                        }
                    />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                        <React.Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                        }
                    />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                        <React.Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                        }
                    />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
  
export default Rightbar