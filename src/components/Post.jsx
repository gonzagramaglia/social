import React, { useState } from "react";
import { Favorite, FavoriteBorder, MoreVert, Share, ChatBubble, Delete } from "@mui/icons-material";
import { Box, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography, TextField } from "@mui/material";


const Post = ({ theme }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== "") {
        setComments([...comments, comment]);
        setComment("");
        }
    };

    const handleDeleteComment = (index) => {
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };

    return (
        <Card sx={{ margin: 5, bgcolor: theme.palette.secondary.medium }}>
            <CardHeader
                avatar={
                    <Avatar 
                        alt="Frankey"
                        src="/one-piece/frankey-profile.webp"
                        sx={{ bgcolor: "#20BB9A" }} aria-label="recipe"
                    >
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert sx={{ color: theme.palette.icons.main }} />
                    </IconButton>
                }
                title="Frankey"
                titleTypographyProps={{ variant: "p", sx: { color:theme.palette.text.main } }}
                subheader="May 22, 2023"
                subheaderTypographyProps={{ sx: { color: theme.palette.text.minor } }}
            />
            <CardMedia
                component="img"
                height="20%"
                image="/one-piece/post-frankey.jpeg"
                alt="Frankey Shogun"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: theme.palette.text.main }} >
                    New feature of the Frankey Shogun 😎
                </Typography>
            </CardContent>
            <CardActions 
                disableSpacing 
                sx={{ margin:"-27px -10px -32px" }}
            >
                <IconButton aria-label="Add to favorites">
                    <Checkbox
                        icon={<FavoriteBorder sx={{ color: theme.palette.icons.minor }} />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                </IconButton>
                <IconButton aria-label="Share">
                    <Share sx={{ color: theme.palette.icons.main }} />
                </IconButton>
            </CardActions>
            <CardContent>
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ gap:"5px" }}
                    >
                        <Avatar 
                            alt="Chopper"
                            src="/one-piece/chopper-profile.webp"
                            sx={{ bgcolor: "#20BB9A", width:"30px", height:"30px" }} aria-label="recipe"
                        >
                        </Avatar>
                        <Typography 
                            variant="body2" 
                            color="text.primary"
                            sx={{ margin:"20px 5px", color:theme.palette.text.main }}
                        >
                            Chopper: AMAZING 🤩
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ gap:"5px" }}
                    >
                        <Avatar 
                            alt="Usopp"
                            src="/one-piece/usopp-profile.jpeg"
                            sx={{ bgcolor: "#20BB9A", width:"30px", height:"30px" }} aria-label="recipe"
                        >
                        </Avatar>
                        <Typography 
                            variant="body2" 
                            color="text.primary"
                            sx={{ margin:"20px 5px", color:theme.palette.text.main }}
                        >
                            Usopp: WOOOOW 🤯
                        </Typography>
                    </Box>
                {comments.map((comment, index) => (
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ gap:"5px" }}
                    >
                        <Avatar 
                            alt="Luffy"
                            src="/one-piece/luffy-profile-one.jpeg"
                            sx={{ bgcolor: "#20BB9A", width:"30px", height:"30px" }} aria-label="recipe"
                        >
                        </Avatar>
                        <Typography 
                            key={index} 
                            variant="body2" 
                            color="text.primary"
                            sx={{ margin:"20px 5px", color:theme.palette.text.main }}
                        >
                            Luffy (Next Pirate King): {comment}
                        </Typography>
                        <IconButton 
                            aria-label="delete" 
                            onClick={() => handleDeleteComment(index)}
                            sx={{ marginLeft:"auto", marginRight:"20px" }}
                        >
                            <Delete />
                        </IconButton>
                    </Box>
                ))}
                <form onSubmit={handleCommentSubmit}>
                    <TextField
                        label="Add a comment"
                        value={comment}
                        onChange={handleCommentChange}
                        fullWidth
                        sx={{
                            zIndex:"0",
                            "& .MuiInputLabel-root": {
                                color: theme.palette.text.minor, // Label color
                            },
                            "& .MuiInputBase-root": {
                                color: theme.palette.text.main, // Text color of the input
                            },

                        }}
                    />
                </form>
            </CardContent>
        </Card>
    )
}

export default Post