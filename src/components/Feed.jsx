import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = ({ theme }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box 
        flex={4} 
        p={{ xs: 0, md: 2 }}
    >
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={700} />
        </Stack>
      ) : (
        < Box sx={{ marginTop:"165px", marginLeft:{xs:"0px", sm:"-50px"}, marginRight:{xs:"0px", md:"-40px"} }}>
          <Post theme={theme} />
          <Post theme={theme} />
          <Post theme={theme} />
          <Post theme={theme} />
          <Post theme={theme} />
          <Post theme={theme} />
        </Box>
      )}
    </Box>
  )
}

export default Feed