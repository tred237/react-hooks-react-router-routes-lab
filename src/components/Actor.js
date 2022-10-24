import React from "react";

function Actor({ actor }){
    return (
        <div>
            <h2>{`Name: ${actor.name}`}</h2>
            <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
        </div>
    )
}

export default Actor