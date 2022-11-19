import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategoryNames } from "./utils/index";
import "./Right.css";

function Right() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [genreTitle, setGenreTitle] = useState("");
  const genres = useSelector((state) => state.genres);
  const { genreId } = useParams();
  const genreRef = useRef(genreId);

  useEffect(() => {
    const genre = genres.find((item) => item.id == genreId);
    setGenreTitle(genre?.name);
    console.log(genreId,genreRef.current);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&page=${pageNumber}${
        genreId ? `&with_genres=${genreId}` : ""
      }`
    )
      .then((response) => response.json())
      .then((json) => {
        if(genreId==genreRef.current){
          setMovies([...movies, ...json.results])
        }
        else{
          setMovies(json.results);
          genreRef.current = genreId;
        }
        });
  }, [genreId, pageNumber]);
  console.log(movies);
  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };
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
                <p className="about">
                  {getCategoryNames(genres, item.genre_ids).join(", ")}
                </p>
                <p className="story">{item.overview}</p>
                <button className="but-favorites">Favorites</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="button-end" onClick={() => loadMore()}>
        Load More
      </button>
    </div>
  );
}

export default Right;
