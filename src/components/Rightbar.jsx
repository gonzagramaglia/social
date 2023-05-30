import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
  
const Rightbar = () => {
    return (
        <Box 
            flex={2} 
            p={2} 
            sx={{ display: { xs: "none", md: "block" } }}
            minWidth={265}
        >
            <Box position="fixed" width={257}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7} sx={{ cursor: 'pointer' }} >
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
                <List sx={{ width: '100%', marginLeft:'-18px', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Mugiwara" src="/one-piece/mugiwara-flag.jpeg" sx={{ cursor: 'pointer' }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="[Group] Mugiwara"
                        secondary={
                        <React.Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            Nami
                            </Typography>
                            {": Who was the funny one that put back the flag that Luf..."}
                        </React.Fragment>
                        }
                    />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Tama" src="/one-piece/tama-profile.webp" sx={{ cursor: 'pointer' }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Hey, Tama!"
                        secondary={
                        <React.Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            You
                            </Typography>
                            {': How are things going in Wano?? Hope great!!'}
                        </React.Fragment>
                        }
                    />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Garp" src="/one-piece/garp-profile.jpg" sx={{ cursor: 'pointer' }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Take care, Luffy"
                        secondary={
                        <React.Fragment>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            Garp
                            </Typography>
                            {": Stay strong and continue being the brave young m.."}
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