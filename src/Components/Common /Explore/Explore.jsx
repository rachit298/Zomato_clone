import { nanoid } from "nanoid";
import React from "react";
import Card from "./Card/Card";
import "./Explore.css";

function Explore({ list, collectionName }) {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurent) => {
          return <Card key={nanoid()} restaurent={restaurent} />;
        })}
      </div>
    </div>
  );
}

export default Explore;
