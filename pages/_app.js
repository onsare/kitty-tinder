import { useState, useEffect } from "react";
import useLocalStorage from "../utils/useLocalStorareHook";

import "../styles/globals.css";

import Layout from "../components/Layout";

import { AppContext } from "../context/AppContext";
import { API_URL, API_KEY } from "../lib";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    id: 1,
    name: "Mr. Miagi",
    age: 2,
    bio: "My name is cat but my friends call me Mr. Miagi",
    avatar: "https://cdn2.thecatapi.com/images/hjPYxZKIu.jpg",
  });
  const [kittys, setKittys] = useState(null);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);
  //first arg is key to the value in local storage
  const [likedUsers, setLikedUsersToLocalStorage] = useLocalStorage(
    "likedUsers",
    []
  );
  const [disLikedUsers, setDisLikedUsersToLocalStorage] = useLocalStorage(
    "dislikedUsers",
    []
  );

  console.log(likedUsers);

  useEffect(async () => {
    setLoading(true);
    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setKittys(data);
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        kittys,
        loading,
        liked,
        setLiked,
        disliked,
        setDisliked,
        setLikedUsersToLocalStorage,
        setDisLikedUsersToLocalStorage,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
