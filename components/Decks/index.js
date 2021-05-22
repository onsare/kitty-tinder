import React from "react";
import Card from "./Card";

function Decks({ data }) {
  console.log(data);
  return (
    <div className="decks">
      {data.map((cat) => (
        <Card key={cat.id} picture={cat.url} />
      ))}
      <Card />
    </div>
  );
}

export default Decks;
