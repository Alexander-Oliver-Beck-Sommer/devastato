import styles from "../scss/pages/_stories.module.scss";
import Head from "next/head";

export default function StoriesPage() {
  return (
    <>
      <Head>
        <title>Stories | Devastato</title>
        <meta
          name="description"
          content="Hundreds of different stories, from lighthearted tales to gruesome stories of the past."
        />
      </Head>
      <h1>Stories Page!</h1>
    </>
  );
}
