import React from "react";
import Dislike from "./Dislike";
import Like from "./Like";
import Rewind from "./Rewind";
import Superlike from "./Superlike";

function Actions() {
  return (
    <div className="actions">
      <Rewind />
      <Dislike />
      <Like />
      <Superlike />
    </div>
  );
}

export default Actions;
