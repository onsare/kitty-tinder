import React from "react";
import Head from "next/head";

import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Cat Love</title>
        <meta name="description" content="Tinder for cats" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
