import Head from "next/head";
import Image from "next/image";
import LandingBanner from "../components/LandingBanner/LandingBanner";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Devastato</title>
        <meta
          name="description"
          content="Writing, archiving and sharing stories of all sorts, to the public eye."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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
        <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <LandingBanner />
      <h4>index</h4>
    </>
  );
}
