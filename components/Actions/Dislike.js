import React from "react";

function Dislike({ swipe }) {
  return (
    <div>
      <button onClick={() => swipe("left")}>
        <img src="/icons/dislike.png" alt="dislike user" />
      </button>
    </div>
  );
}

export default Dislike;
