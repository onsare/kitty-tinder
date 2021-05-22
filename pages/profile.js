import styles from "../styles/Profile.module.css";

function profile() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img
            src="https://cdn2.thecatapi.com/images/hjPYxZKIu.jpg"
            alt="user avatar"
          />
        </div>
        <div className={styles.name}>
          <h1>Mr. Miagi, 2</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            quidem. Ad officiis porro soluta obcaecati placeat aliquam, ut
            consectetur animi reiciendis assumenda odit, reprehenderit cum
            quaerat minima dolores laborum in!
          </p>
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
