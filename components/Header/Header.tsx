import styles from "../../scss/components/_header.module.scss";
import DevastatoLogo from "../../public/images/logos/devastato-logo.png";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { FaHeart, FaTools, FaGavel } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiFillHome,
  AiFillInfoCircle,
  AiFillSetting,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import {
  BsFillFileEarmarkFill,
  BsFillBookmarkFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { HiSquares2X2 } from "react-icons/hi2";
import { SiRabbitmq } from "react-icons/si";
import { RiLoginCircleFill } from "react-icons/ri";

if (typeof window !== "undefined") {
  // document
  //   .querySelectorAll(`.${styles.menu_navigation_links}`)
  //   .addEventListener("click", () => {
  //     document.querySelector(
  //       `.${styles.navigation_opacity_background}`
  //     ).style.border = "solid 1px red";
  //   });
}

export default function Header() {
  return (
    <>
      <header className={styles.devastato_primary_header}>
        <div className={styles.header_burger_icon}>
          <div className={styles.icon_wrapper} id="hamburgerIcon">
            <Hamburger
              id="hello"
              hideOutline={false}
              rounded
              label="Open and close the side navigation menu."
              onToggle={(toggled) => {
                if (toggled) {
                  document.getElementById("opacityContainer").style =
                    "visibility: visible; opacity: 50%;";
                  document.getElementById("navigationContainer").style =
                    "visibility: visible; max-width: 80%; opacity: 100%;";
                  document.getElementById("hamburgerIcon").style.color =
                    "#2d2d2d";
                  document.body.style.overflow = "hidden";
                  document
                    .querySelectorAll(`.${styles.menu_navigation_links}`)
                    .forEach((el) =>
                      el.addEventListener("click", function () {
                        document.getElementById("opacityContainer").style =
                          "visibility: hidden; opacity: 0%;";
                        document.getElementById("navigationContainer").style =
                          "visibility: hidden; max-width: 0%;";
                        document.getElementById("hamburgerIcon").style.color =
                          "#fdfdfd";
                        document.body.style.overflow = "visible";
                      })
                    );
                  document
                    .getElementById("accountIcon")
                    .addEventListener("click", function () {
                      document.getElementById("opacityContainer").style =
                        "visibility: hidden; opacity: 0%;";
                      document.getElementById("navigationContainer").style =
                        "visibility: hidden; max-width: 0%;";
                      document.getElementById("hamburgerIcon").style.color =
                        "#fdfdfd";
                      document.body.style.overflow = "visible";
                    });
                } else {
                  document.getElementById("opacityContainer").style =
                    "visibility: hidden; opacity: 0%;";
                  document.getElementById("navigationContainer").style =
                    "visibility: hidden; max-width: 0%;";
                  document.getElementById("hamburgerIcon").style.color =
                    "#fdfdfd";
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
              id="accountIcon"
              href="/user/account"
              alt="Click to browse and configure your account"
            >
              <MdAccountCircle />
            </Link>
          </div>
          <ul className={styles.menu_content_container}>
            <li>
              <Link href="/" alt="Navigate to home page.">
                <div className={styles.menu_navigation_links}>
                  <AiFillHome className={styles.link_icon} />
                  <h4>home</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/stories" alt="Navigate to stories page.">
                <div className={styles.menu_navigation_links}>
                  <BsFillFileEarmarkFill className={styles.link_icon} />
                  <h4>stories</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/categories" alt="Navigate to categories page.">
                <div className={styles.menu_navigation_links}>
                  <HiSquares2X2 className={styles.link_icon} />
                  <h4>categories</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/user/favourites" alt="Navigate to favourites page.">
                <div className={styles.menu_navigation_links}>
                  <FaHeart className={styles.link_icon} />
                  <h4>favourites</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/user/bookmarks" alt="Navigate to bookmarks page.">
                <div className={styles.menu_navigation_links}>
                  <BsFillBookmarkFill className={styles.link_icon} />
                  <h4>bookmarks</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/the-rabbit-hole"
                alt="Navigate to the rabbit hole page."
              >
                <div className={styles.menu_navigation_links}>
                  <SiRabbitmq className={styles.link_icon} />
                  <h4>the rabbit hole</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about" alt="Navigate to about page.">
                <div className={styles.menu_navigation_links}>
                  <AiFillInfoCircle className={styles.link_icon} />
                  <h4>about</h4>
                </div>
              </Link>
            </li>
            <li className={styles.navigation_links_seperator}></li>
            <li>
              <Link href="/support" alt="Navigate to support page.">
                <div className={styles.menu_navigation_links}>
                  <FaTools className={styles.link_icon} />
                  <h4>help & support</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/support" alt="Navigate to legality page.">
                <div className={styles.menu_navigation_links}>
                  <FaGavel className={styles.link_icon} />
                  <h4>legality</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/about/frequently-asked-questions"
                alt="Navigate to frequently asked questions page."
              >
                <div className={styles.menu_navigation_links}>
                  <BsFillQuestionCircleFill className={styles.link_icon} />
                  <h4>f.a.q</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/user/account" alt="Navigate to support page.">
                <div className={styles.menu_navigation_links}>
                  <MdAccountCircle className={styles.link_icon} />
                  <h4>account</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/user/login" alt="Navigate to login page.">
                <div className={styles.menu_navigation_links}>
                  <RiLoginCircleFill className={styles.link_icon} />
                  <h4>Login</h4>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/user/settings" alt="Navigate to settings page.">
                <div className={styles.menu_navigation_links}>
                  <AiFillSetting className={styles.link_icon} />
                  <h4>settings</h4>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
