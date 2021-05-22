import React from "react";
import Card from "./Card";
import TinderCard from "react-tinder-card";

function Decks({ data }) {
  console.log(data);
  return (
    <div className="decks">
      {data.map((cat) => (
        <TinderCard
          key={cat.id}
          className="swipe "
          preventSwipe={["up", "down"]}
        >
          <Card picture={cat.url} />
        </TinderCard>
      ))}
    </div>
  );
}

export default Decks;
