import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Right.css";

function Right() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [genreTitle, setGenreTitle] = useState('');
  const genres = useSelector((state) => state.genres);
  const { genreId } = useParams();
  useEffect(() => {
    
    const genre = genres.find((item) => item.id == genreId)
    setGenreTitle(genre?.name);
    console.log(genres,genre)
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&page=${pageNumber}${
        genreId ? `&with_genres=${genreId}` : ""
      }`
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, [genreId,pageNumber ]);
  console.log(movies);
  return (
    <div className="right-container-wrapper">
      <div className="right-container">
        <div className="genre-name">
          <p>{genreTitle}</p>
          <hr></hr>
        </div>
        <div className="movies-wrapper">
          {movies.map((item) => (
            <div key={item.id} className="movie-cart">
              <div className="movie-picture">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                />
              </div>
              <div className="movie-info">
                <Link to={`/movie/${item.id}`}>
                  <p className="title">{item.title}</p>
                </Link>
                <p className="about">{item.genre_ids}</p>
                <p className="story">{item.overview}</p>
                <button className="but-favorites">Favorites</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Right;
