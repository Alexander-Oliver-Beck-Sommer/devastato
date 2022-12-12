import styles from "../../scss/components/_footer.module.scss";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <section className={styles.footer_content_section}>
        <div className={styles.content_desc}>
          <div>
            <h3 className={styles.desc_title}>About Devastato</h3>
            <p>
              Devastato is an online story-archive, that specializes in
              researching and publishing infamous stories to the public. <br />
              Our main objective is to inform anonymous readers with bizzare
              tales of humanity itself.
            </p>
          </div>
        </div>
        <div className={styles.content_links}>
          <div>
            <h3 className={styles.links_title}>Site Links</h3>
            <ul>
              <li>
                <Link
                  href="/"
                  alt="Click here to navigate to the home page."
                  className={styles.forsen}
                >
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  alt="Click here to navigate to the stories page."
                >
                  <p>Stories</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  alt="Click here to navigate to the categories page."
                >
                  <p>Categories</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/the-rabbit-hole"
                  alt="Click here to navigate to the rabbit hole page."
                >
                  <p>The Rabbit Hole</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  alt="Click here to navigate to the about page."
                >
                  <p>The About</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.content_contact}>
          <div>
            <h3>Get In Touch</h3>
            <p>
              <b>Phone: </b>
              <a
                href="tel:4566447732"
                aria-label="Click to call our hotline support"
              >
                (45+) 6644 7732
              </a>
            </p>
            <p>
              <b>Mail: </b>
              <a
                href="mailto:mail.support@devastato.com"
                aria-label="Click to send a perosnal mail to us"
              >
                mail.support@devastato.com
              </a>
            </p>
          </div>
        </div>
        <ul className={styles.content_socials}>
          <li>
            <a
              href="https://twitter.com"
              aria-label="Click to get redirected to our twitter account!"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              aria-label="Click to get redirected to our facebook page!"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              aria-label="Click to get redirected to our linkedin account!"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              aria-label="Click to get redirected to our instagram account!"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.copyright_section}>
        <h4>© 2022 - 2022 www.devastato.com - All Rights Reserved.</h4>
      </section>
    </footer>
  );
}
