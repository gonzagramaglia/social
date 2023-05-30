import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack, } from "@mui/icons-material";
import { Box } from "@mui/system";
  
const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
  
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});
  
const Add = ({theme}) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Tooltip
          onClick={(e) => setOpen(true)}
          title="New Post"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", sm: 30 },
            color: theme.palette.text.main,
            bgcolor: theme.palette.primary.main,
            "&:hover": {
                bgcolor: theme.palette.primary.minor 
            },
          }}
        >
            <Fab aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <SytledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box
                width={400}
                height={280}
                bgcolor={theme.palette.secondary.medium}
                color={theme.palette.text.main}
                p={3}
                borderRadius={5}
            >
                <Typography variant="h6" color="gray" textAlign="center" marginBottom={2} >
                Create post
                </Typography>
                <UserBox>
                <Avatar
                    src="/one-piece/luffy-profile-one.jpeg"
                    sx={{ width: 30, height: 30 }}
                />
                <Typography fontWeight={500} variant="span">
                    Luffy (Next Pirate King)
                </Typography>
                </UserBox>
                <TextField
                    sx={{
                        width: "97%",
                        padding: 1
                    }}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                    inputProps={{
                        style: {
                            color: theme.palette.text.minor,
                        },
                        placeholder: "What's on your mind?"
                    }}
                />
                <Stack direction="row" gap={1} mt={2} mb={3} >
                    <EmojiEmotions sx={{ cursor: "pointer", color:"#E4B04D"}} />
                    <Image sx={{ cursor: "pointer", color:"#1A56DA" }} />
                    <VideoCameraBack color="success" sx={{ cursor: "pointer" }} />
                    <PersonAdd color="error" sx={{ cursor: "pointer" }} />
                </Stack>
                <ButtonGroup
                    fullWidth
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Button>Post</Button>
                    <Button sx={{ width: "100px" }}>
                        <DateRange />
                    </Button>
                </ButtonGroup>
            </Box>
        </SytledModal>
      </>
    )
}
  
export default Add