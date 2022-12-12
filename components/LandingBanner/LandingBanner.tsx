import styles from "../../scss/components/_landingBanner.module.scss";
import Image from "next/image";
import Link from "next/link";
// Images
import Year1998ProblemImage from "../../public/images/png/old-computer.png";
import JonestownImage from "../../public/images/png/jonestown.png";
import AustrianWinePoisoningImage from "../../public/images/png/austrian-wine-poisoning.png";
import NanjingImage from "../../public/images/png/Nanjing.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export default function LandingBanner() {
  return (
    <section className={styles.landing_banner_container}>
      <div className={styles.banner_overlay}></div>
      <div className={styles.banner_content}>
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            // 1000 = 1sec
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className={styles.swiper_container}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.slide_image}>
              <Image src={Year1998ProblemImage} alt="Old computer" />
            </div>
            <div className={styles.slide_text}>
              <h2>The year 2038 problem</h2>
              <p className={styles.slide_text_paragraph}>
                The Year 2038 problem (also known as Y2038, Y2K38, Y2K38
                superbug, or the Epochalypse) is a time formatting bug in
                computer systems with representing...
              </p>
            </div>
            <div className={styles.slide_navigation_button}>
              <Link
                href="/stories/technological/the-year-2038-problem"
                aria-label="Click to read the year 2038 problem!"
              >
                <h3>read more</h3>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.slide_image}>
              <Image src={JonestownImage} alt="Old shack" />
            </div>
            <div className={styles.slide_text}>
              <h2>Jonestown</h2>
              <p className={styles.slide_text_paragraph}>
                The Peoples Temple Agricultural Project, better known by its
                informal name Jonestown, was a remote settlement in Guyana
                established by the Peoples Temple, a U.S.-based cult under the
                leadership of...
              </p>
            </div>
            <div className={styles.slide_navigation_button}>
              <Link
                href="/stories/tragedies/jonestown"
                aria-label="Click to read jonestown!"
              >
                <h3>read more</h3>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.slide_image}>
              <Image src={AustrianWinePoisoningImage} alt="Old wine machine" />
            </div>
            <div className={styles.slide_text}>
              <h2>Austrian Wine Incident</h2>
              <p className={styles.slide_text_paragraph}>
                The 1985 diethylene glycol wine scandal (German:
                Glykolwein-Skandal) was an incident in which several Austrian
                wineries illegally adulterated their wines using the toxic
                substance diethylene glycol...
              </p>
            </div>
            <div className={styles.slide_navigation_button}>
              <Link
                href="/stories/incidents/the-austrian-wine-poisoning"
                aria-label="Click to read the austrian wine poisoning!"
              >
                <h3>read more</h3>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.slide_image}>
              <Image src={NanjingImage} alt="Nanjing structure" />
            </div>
            <div className={styles.slide_text}>
              <h2>The nanjing Massacre</h2>
              <p className={styles.slide_text_paragraph}>
                The Nanjing Massacre or the Rape of Nanjing, was the mass murder
                of Chinese civilians in Nanjing, the capital of the Republic of
                China, immediately after the Battle of Nanking in the Second
                Sino-Japanese War, by the Imperial Japanese Army. Beginning on
                December 13, 1937, the massacre lasted six weeks. The
                perpetrators also committed other war crimes such as mass rape,
                looting, and arson. The massacre was one of the worst atrocities
                committed during World War II.
              </p>
            </div>
            <div className={styles.slide_navigation_button}>
              <Link
                href="/stories/tragedies/the-nanjing-massacre"
                aria-label="Click to read the nanjing massacre"
              >
                <h3>read more</h3>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
