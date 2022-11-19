import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/actions/genreActions";
import "./Left.css";
import { Link } from "react-router-dom";

function Left() {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => {
        setGenres(json.genres);
        dispatch(addItem(json.genres));
      });
  }, []);

  return (
    <div className="left-container">
      <button className="genres">Genres</button>

      {genres.map((item) => (
        <Link key={item.id} to={`/${item.id}`} className="list">
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Left;
