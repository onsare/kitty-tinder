import React from "react";

function Chat({ styles, name, message, time, avatar }) {
  return (
    <div className={styles.chat}>
      <div className={styles.avatar}>
        <img src={avatar} alt="user avatar" />
        <div className={styles.messages}>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
      </div>

      <div className={styles.timestamp}>
        <h4>{time}</h4>
      </div>
    </div>
  );
}

export default Chat;
