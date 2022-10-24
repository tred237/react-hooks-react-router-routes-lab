import React from "react";
import Actor from "./Actor";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <Actor key={actor.name} actor={actor} />)}
    </div>
  )
}

export default Actors;
