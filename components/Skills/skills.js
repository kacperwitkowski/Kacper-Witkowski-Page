import styles from "./Skills.module.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import ParticlesBackground from "../ParticlesBackground/particlesBackground";

const Skills = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.skills}>
        <div className={styles.skills__particles}>
          <ParticlesBackground />
        </div>
        <div className={styles.skills__image}>
          <img src="/images/profilePic.png" alt="Kacper Witkowski face" />
        </div>

        <section className={styles.qualification}>
          <h2 className={styles.section__title}>Qualifications</h2>
          <span className={styles.section__subtitle}>My personal journey</span>

          <div className={styles.qualification__data__wrapper}>
            <div className={styles.qualification__data}>
              <div className={styles.qualification__content}>
                <h3 className={styles.qualification__title}>
                  Studying programming at WSB University
                  <span style={{display: "block"}}>(Bachelor's degree)</span>
                </h3>
                <span className={styles.qualification__subtitle}>
                  Gdynia, Poland
                </span>
                <div className={styles.qualification__calendar}>
                  <IoCalendarClearOutline
                    className={styles.qualification__calendar__icon}
                  />
                  Oct 2019 - Feb 2023
                </div>
              </div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div></div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>

              <div className={styles.qualification__content}>
                <h3 className={styles.qualification__title}>
                  Software Developer at Soildata
                </h3>
                <span className={styles.qualification__subtitle}>
                  Bialystok, Poland
                </span>
                <div className={styles.qualification__calendar}>
                  <IoCalendarClearOutline
                    className={styles.qualification__calendar__icon}
                  />
                  Sep 2021 - Sep 2022
                </div>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div></div>

              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>

              <div className={styles.qualification__content}>
                <h3 className={styles.qualification__title}>
                  Web Developer at your company
                </h3>
                <span className={styles.qualification__subtitle}>Anywhere</span>
                <div className={styles.qualification__calendar}>
                  <IoCalendarClearOutline
                    className={styles.qualification__calendar__icon}
                  />
                  2023
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
