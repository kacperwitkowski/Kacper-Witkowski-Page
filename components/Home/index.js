import SEO from "../SEO";
import WorkList from "../WorkList";
import styles from "./Home.module.css";

const Home = () => (
  <div className={styles.home}>
    <div className={styles.home__content}>
      <SEO
        title="Kacper Witkowski | Portfolio"
        description="Kacper Witkowski Junior Full Stack Developer"
      />
      <WorkList />
    </div>
  </div>
);

export default Home;
