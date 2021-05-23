import { useContext } from "react";

import styles from "../styles/Home.module.css";
import Decks from "../components/Decks";
import UserActions from "../components/Actions";

import { AppContext } from "../context/AppContext";

export default function Home() {
  const appContext = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Decks data={appContext.kittys} />
      <UserActions />
    </div>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(API_URL, {
//     method: "GET",
//     headers: {
//       "X-API-KEY": API_KEY,
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data },
//   };
// }
