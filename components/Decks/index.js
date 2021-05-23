import React, { useContext, useMemo } from "react";

import Card from "./Card";
import TinderCard from "react-tinder-card";
import UserActions from "../Actions";

import { AppContext } from "../../context/AppContext";

const alreadyRemoved = [];

function Decks({ data }) {
  const likedUsers = [];
  const dislikedUsers = [];
  const {
    setLiked,
    setDisliked,
    setDisLikedUsersToLocalStorage,
    setLikedUsersToLocalStorage,
  } = useContext(AppContext);

  const childRefs = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const onCardLeftScreen = (direction, cat) => {
    if (direction === "right") {
      likedUsers.push(cat);
      setLiked([...likedUsers, cat]);
      setLikedUsersToLocalStorage([...likedUsers, cat]);
    } else {
      dislikedUsers.push(cat);
      setDisliked([...dislikedUsers, cat]);
      setDisLikedUsersToLocalStorage([...dislikedUsers, cat]);
    }
  };

  const swiped = (direction, cat) => {
    console.log("You swiped " + direction + " on " + cat.id);
    alreadyRemoved.push(cat.id);
  };

  const swipe = (dir) => {
    const cardsLeft = data.filter((cat) => !alreadyRemoved.includes(cat.id));
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id; // Find the card object to be removed
      const index = data.map((cat) => cat.id).indexOf(toBeRemoved); // Find the index of which to make the reference to
      // alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div className="decks">
      {data.map((cat, index) => (
        <TinderCard
          key={cat.id}
          ref={childRefs[index]}
          className="swipe "
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, cat)}
          onCardLeftScreen={(dir) => onCardLeftScreen(dir, cat)}
        >
          <Card picture={cat.url} />
        </TinderCard>
      ))}
      <UserActions swipe={swipe} />
    </div>
  );
}

export default Decks;
