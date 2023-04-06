import App from "next/app";
import React from "react";
import getWorks from "../getWorks";
import WorksContext from "../Works.Context";
import Head from "next/dist/next-server/lib/head";

const MyApp = ({ Component, pageProps, works }) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <WorksContext.Provider value={works}>
        <>
          <Component {...pageProps} />
        </>
      </WorksContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const works = await getWorks();

  return { ...appProps, works };
};

export default MyApp;
