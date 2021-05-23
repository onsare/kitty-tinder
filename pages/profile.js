import { useContext } from "react";

import styles from "../styles/Profile.module.css";

import { AppContext } from "../context/AppContext";

function profile() {
  const userContext = useContext(AppContext);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img src={userContext.user.avatar} alt="user avatar" />
        </div>
        <div className={styles.name}>
          <h1>
            {userContext.user.name},{userContext.user.age}
          </h1>
          <p>{userContext.user.bio}</p>
        </div>
        <div className={styles.misc}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
        <div className={styles.misc}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
      </div>
    </div>
  );
}

export default profile;
