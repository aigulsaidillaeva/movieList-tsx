import React, { useState } from "react";
import { useParams } from "react-router";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

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
      "https://www.2st.com.au/wp-content/uploads/sites/8/2024/12/20241216-5topmoviesof2024-feature.jpg?w=1200",
  },
];
const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === Number(id));
  const [liked, setLiked] = useState<boolean>(
    localStorage.getItem(`like_${id}`) === "true"
  );

  const toggleLike = () => {
    const newLike = !liked;
    setLiked(newLike);
    localStorage.setItem(`like_${id}`, newLike.toString());
  };
  if (!movie) return <Typography>not found</Typography>;
  return (
    <div className="p-4">
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={movie.image}
          alt={movie.title}
        />
        <CardContent>
          <Typography variant="h4">{movie.title}</Typography>
          <Typography variant="body1">Rating: {movie.rating}</Typography>
          <Typography variant="body1">Price: {movie.price}</Typography>
          <IconButton onClick={toggleLike} color={liked ? "error" : "default"}>
            {liked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetail;
