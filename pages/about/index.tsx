import styles from "../scss/pages/_about.module.scss";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Devastato</title>
        <meta
          name="description"
          content="Devastato operates as a news-delivery website, dedicated to writing, archiving and sharing stories of all sorts to the public eye."
        />
      </Head>
      <h1>About Page!</h1>
    </>
  );
}
