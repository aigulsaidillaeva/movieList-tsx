import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router";

interface Movie {
  id: number;
  title: string;
  rating: number;
  price: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Movie 1",
    rating: 8.5,
    price: "$10",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8rwV6GZ6d5eMSF00KB446U37uEKM0A912g&s",
  },
  {
    id: 2,
    title: "Movie 2",
    rating: 7.2,
    price: "$12",
    image:
      "https://global.discourse-cdn.com/eveonline/original/4X/2/f/0/2f0d93e230bf56989af4a624f21d60750f30e423.jpeg",
  },
  {
    id: 3,
    title: "Movie 3",
    rating: 9.1,
    price: "$15",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/db/The_Movies_Coverart.jpg",
  },
];

const MovieList: React.FC = () => {
  return (
    <div className="p-6">
      <Typography variant="h4" gutterBottom>
        Movie List
      </Typography>
      <Grid container spacing={3}>
        {movies.map((item) => (
          <Link to={`/movie/${item.id}`} className="no-underline">
            <Card
              sx={{
                minWidth: 300,
                borderRadius: 2,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia component="img" height="250" image={item.image} />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ⭐ {item.rating} | 💰 {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
