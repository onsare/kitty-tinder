import React, { useState, useMemo } from "react";
import Card from "./Card";
import TinderCard from "react-tinder-card";

function Decks({ data }) {
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };
  return (
    <div className="decks">
      {data.map((cat) => (
        <TinderCard
          key={cat.id}
          className="swipe "
          preventSwipe={["up", "down"]}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen(cat.id)}
        >
          <Card picture={cat.url} />
        </TinderCard>
      ))}
    </div>
  );
}

export default Decks;
