import React from "react";

function Like({ swipe }) {
  return (
    <div>
      <button onClick={() => swipe("right")}>
        <img src="/icons/like.png" alt="like user" />
      </button>
    </div>
  );
}

export default Like;
