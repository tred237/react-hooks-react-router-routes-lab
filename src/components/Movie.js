import React from "react";

function Movie({ movie }){
    return (
        <div>
            <h2>{`Name: ${movie.title}`}</h2>
            <p>{`Time: ${movie.time}`}</p>
            <p>Genres:</p>
            <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
        </div>
    )
}

export default Movie