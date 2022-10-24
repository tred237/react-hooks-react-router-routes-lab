import React from "react";

function Director({ director }){
    return (
        <div>
            <h2>{`Name: ${director.name}`}</h2>
            <p>Movies:</p>
            <ul>{director.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
        </div>
    )
}

export default Director