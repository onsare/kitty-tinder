import React from "react";
import Dislike from "./Dislike";
import Like from "./Like";
import Rewind from "./Rewind";
import Superlike from "./Superlike";

function Actions({ swipe }) {
  return (
    <div className="actions">
      <Rewind />
      <Dislike swipe={swipe} />
      <Like swipe={swipe} />
      <Superlike />
    </div>
  );
}

export default Actions;
