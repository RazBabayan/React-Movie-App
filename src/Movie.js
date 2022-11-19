import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";

function Movie() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="Movie-container-wrapper">
      <div key={data.id} className="movie_cart">
        <div className="movie_picture">
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
        </div>
        <div className="movie_info">
          <p className="title">{data.title}</p>

          <p className="about">{data?.genres?.map((g) => g.name).join(", ")}</p>
          <p className="story">{data.overview}</p>
          <button className="but_favorites">Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
