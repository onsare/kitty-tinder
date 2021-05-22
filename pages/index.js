import styles from "../styles/Home.module.css";
import Decks from "../components/Decks";
import UserActions from "../components/Actions";

export default function Home() {
  return (
    <div className={styles.container}>
      <Decks />
      <UserActions />
    </div>
  );
}
