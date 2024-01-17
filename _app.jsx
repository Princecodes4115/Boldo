// _app.js or _app.tsx

import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
