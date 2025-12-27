import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext.jsx";


export default function MovieCard({ movie }) {
   const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id);


  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/500x750?text=No+Image"}
          alt={movie.Title}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> ♥ </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}
