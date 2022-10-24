import React from "react";
import Director from "./Director";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <Director key={director.name} director={director} />)}
    </div>
  )
}

export default Directors;
