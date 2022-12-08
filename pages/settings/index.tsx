import styles from "../scss/pages/_settings.module.scss";
import Head from "next/head";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings | Devastato</title>
        <meta
          name="description"
          content="Change and configure your experience on Devastato."
        />
      </Head>
      <h1>Settings Page!</h1>
    </>
  );
}
