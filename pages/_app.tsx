import "../scss/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <motion.main
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.main>
    </Layout>
  );
}
