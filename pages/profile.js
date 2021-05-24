import { useContext } from "react";

import styles from "../styles/Profile.module.css";

import { AppContext } from "../context/AppContext";

function profile() {
  const { user, likedUsers, disLikedUsers } = useContext(AppContext);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img src={user.avatar} alt="user avatar" />
        </div>
        <div className={styles.name}>
          <h1>
            {user.name},{user.age}
          </h1>
          <p>{user.bio}</p>
        </div>
        <div>
          <h3>You Liked the following kittys</h3>
        </div>
        <div className={styles.misc}>
          {likedUsers.map((user) => (
            <div
              key={user.id}
              className={styles.block}
              style={{
                backgroundImage: `url(${user.url})`,
                color: "white",
                fontWeight: "bold",
                fontFamily: "cursive",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {user.id}
            </div>
          ))}
        </div>

        <div>
          <h3>You Disliked the following kittys</h3>
        </div>
        <div className={styles.misc}>
          {disLikedUsers.map((user) => (
            <div
              key={user.id}
              className={styles.block}
              style={{
                backgroundImage: `url(${user.url})`,
                color: "white",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            >
              {user.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default profile;
