import React, { useState } from "react";
import { Favorite, FavoriteBorder, MoreVert, Share, ChatBubble, Delete } from "@mui/icons-material";
import { Box, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography, TextField } from "@mui/material";


const Post = () => {
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
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar 
                        alt="Frankey"
                        src="/one-piece/frankey-profile.webp"
                        sx={{ bgcolor: "red" }} aria-label="recipe"
                    >
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Frankey"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="/one-piece/post-frankey.jpeg"
                alt="Frankey Shogun"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    New feature of the Frankey Shogun 😎
                </Typography>
            </CardContent>
            <CardActions 
                disableSpacing 
                sx={{ margin:"-27px -10px -32px" }}
            >
                <IconButton aria-label="Add to favorites">
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
                </IconButton>
                <IconButton aria-label="Share">
                    <Share />
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
                            sx={{ bgcolor: "red", width:"30px", height:"30px" }} aria-label="recipe"
                        >
                        </Avatar>
                        <Typography 
                            variant="body2" 
                            color="text.primary"
                            sx={{ margin:"20px 5px" }}
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
                            sx={{ bgcolor: "red", width:"30px", height:"30px" }} aria-label="recipe"
                        >
                        </Avatar>
                        <Typography 
                            variant="body2" 
                            color="text.primary"
                            sx={{ margin:"20px 5px" }}
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
                            sx={{ bgcolor: "red", width:"30px", height:"30px" }} aria-label="recipe"
                        >
                        </Avatar>
                        <Typography 
                            key={index} 
                            variant="body2" 
                            color="text.primary"
                            sx={{ margin:"20px 5px" }}
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
                <form
                    onSubmit={handleCommentSubmit}
                >
                    <TextField
                        label="Add a comment"
                        value={comment}
                        onChange={handleCommentChange}
                        fullWidth
                    />
                </form>
            </CardContent>
        </Card>
    )
}

export default Post