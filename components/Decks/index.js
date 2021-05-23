import { useContext } from "react";

import Card from "./Card";
import TinderCard from "react-tinder-card";

import { AppContext } from "../../context/AppContext";

function Decks({ data }) {
  const likedUsers = [];
  const dislikedUsers = [];
  const {
    setLiked,
    setDisliked,
    setDisLikedUsersToLocalStorage,
    setLikedUsersToLocalStorage,
  } = useContext(AppContext);

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const swiped = (direction, cat) => {
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

  return (
    <div className="decks">
      {data.map((cat) => (
        <TinderCard
          key={cat.id}
          className="swipe "
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, cat)}
          onCardLeftScreen={() => onCardLeftScreen(cat.id)}
        >
          <Card picture={cat.url} />
        </TinderCard>
      ))}
    </div>
  );
}

export default Decks;
