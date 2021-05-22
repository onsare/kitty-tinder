import Chat from "../components/Chats";
import styles from "../styles/Chat.module.css";

function chat() {
  return (
    <div className="page">
      <Chat
        styles={styles}
        name="Bella"
        message="Olla! Mr. Miagi"
        time="20 minute ago"
        avatar="https://cdn2.thecatapi.com/images/w-cm4pAhr.jpg"
      />
      <Chat
        styles={styles}
        name="Kitty"
        message="Whatsapp "
        time="44 minutes agon"
        avatar="https://cdn2.thecatapi.com/images/y7TSXp97Y.jpg"
      />
      <Chat
        styles={styles}
        name="Milo"
        message="How are you?"
        time="2 days ago"
        avatar="https://cdn2.thecatapi.com/images/rBn7OfThy.jpg"
      />
    </div>
  );
}

export default chat;
