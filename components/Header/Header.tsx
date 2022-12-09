import styles from "../../scss/components/_header.module.scss";
import DevastatoLogo from "../../public/images/logos/devastato-logo.png";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { TiHome } from "react-icons/ti";

export default function Header() {
  return (
    <>
      <header className={styles.devastato_primary_header}>
        <div className={styles.header_burger_icon}>
          <div className={styles.icon_wrapper} id="hamburgerIcon">
            <Hamburger
              hideOutline={false}
              rounded
              label="Open and close the side navigation menu."
              onToggle={(toggled) => {
                if (toggled) {
                  document.getElementById("opacityContainer").style =
                    "visibility: visible; opacity: 50%;";
                  document.getElementById("navigationContainer").style =
                    "visibility: visible; max-width: 80%;";
                  document.getElementById("hamburgerIcon").style.color =
                    "#2d2d2d";
                  document.body.style.overflow = "hidden";
                } else {
                  document.getElementById("opacityContainer").style =
                    "visibility: hidden; opacity: 0%;";
                  document.getElementById("navigationContainer").style =
                    "visibility: hidden; max-width: 0%;";
                  document.getElementById("hamburgerIcon").style.color =
                    "#fdfdfd";
                  document.body.style.overflow = "visible";
                }
              }}
            />
          </div>
        </div>
        <div className={styles.header_logo}>
          <Link href="/" className={styles.logo_wrapper}>
            <Image src={DevastatoLogo} alt="Devastato" />
          </Link>
        </div>
        <div className={styles.header_search_field}>
          <form className={styles.search_wrapper}>
            <input type="search" placeholder="Search Story..." name="search" />
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </header>
      <section
        id="opacityContainer"
        className={styles.navigation_opacity_background}
      ></section>
      <section
        className={styles.navigation_menu_container}
        id="navigationContainer"
      >
        <nav className={styles.navigation_menu} id="navigationMenu">
          <div className={styles.top_part_container}>
            <Link
              href="/user/account"
              alt="Click to browse and configure your account"
            >
              <MdAccountCircle />
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
}
