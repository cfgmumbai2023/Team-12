import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@material-ui/core";
import Header from "../partials/Header/Header";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { Container } from "reactstrap";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("English");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <div sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Header/>
      <Container style={{marginTop: "10vh"}}>
      <Box sx={{ height: { sx: "auto", md: "auto" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
      </Container>
    </div>
  );
};

export default Feed;
