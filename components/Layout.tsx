import { useRouter } from "next/router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  const router = useRouter();
  // Basically hide the navigation and footer when we land on the 404 page. We can also change it to something else if we want to
  const showHeader = router.pathname === "/404" ? false : true;
  const showFooter = router.pathname === "/404" ? false : true;
  return (
    <>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}
