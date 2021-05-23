import { useState } from "react";

import "../styles/globals.css";

import Layout from "../components/Layout";

import { AppContext } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ isAuthenticated: !!user, user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
