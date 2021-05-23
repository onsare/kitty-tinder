import { useContext } from "react";

import styles from "../styles/Home.module.css";
import Decks from "../components/Decks";
import UserActions from "../components/Actions";

import { AppContext } from "../context/AppContext";
import { API_URL, API_KEY } from "../lib";

export default function Home() {
  const appContext = useContext(AppContext);
  if (appContext.kittys === null) return <h1>Loading...</h1>;
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
