import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const UserDash = () => {
  const bookmarkedVideos = [
    {
      id: 1,
      title: "Introduction to Physics",
      description:
        "Learn the basics of physics, including motion, forces, and energy.",
      imageUrl:
        "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Chemical Reactions",
      description:
        "Explore different types of chemical reactions and their importance in everyday life.",
      imageUrl:
        "https://images.pexels.com/photos/3825366/pexels-photo-3825366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Cell Structure and Functions",
      description:
        "Discover the structure and functions of cells, the building blocks of life.",
      imageUrl:
        "https://images.pexels.com/photos/5905518/pexels-photo-5905518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    // Add more videos as needed
  ];

  const videos = [
    {
      id: 1,
      title: "Electricity and Circuits",
      description:
        "Learn about electric circuits and the principles of electricity.",
      imageUrl:
        "https://images.pexels.com/photos/2635595/pexels-photo-2635595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "The Solar System",
      description:
        "Explore the planets, moons, and other celestial bodies in our solar system.",
      imageUrl:
        "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Ecological Balance",
      description:
        "Understand the importance of ecological balance and the impact of human activities on the environment.",
      imageUrl:
        "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      <Container sx={{ marginTop: 2 }}>
        <Typography variant="h6">Bookmarks</Typography>
        <div style={{ overflowX: "auto" }}>
          <Grid container spacing={2}>
            {bookmarkedVideos.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={video.imageUrl}
                    alt={video.title}
                  />
                  <CardContent>
                    <Typography variant="subtitle2">{video.title}</Typography>
                    <Typography variant="body2">{video.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        <Typography variant="h6" sx={{ marginTop: 4 }}>
          Recent History
        </Typography>
        <Grid container spacing={2}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={video.imageUrl}
                  alt={video.title}
                />
                <CardContent>
                  <Typography variant="subtitle2">{video.title}</Typography>
                  <Typography variant="body2">{video.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default UserDash;
