import styles from "../scss/pages/_404.module.scss";
import Head from "next/head";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Something went wrong...</title>
        <meta
          name="description"
          content="Woops! Looks like something went wrong in the search of the page you were looking for. Perhaps it's been deleted or never existed?"
        />
      </Head>
      <h1>Index</h1>
      <h1>Error Page!</h1>
    </>
  );
}
