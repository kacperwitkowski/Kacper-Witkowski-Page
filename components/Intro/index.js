import styles from "./Intro.module.css";
import { RoughNotation } from "react-rough-notation";

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.arrow}>
          <div className={styles.curve}></div>
          <div className={styles.point}></div>
        </div>
        <div className={styles.shortOne}>
          <p className={styles.greeting}>Hello World, </p>
          <RoughNotation
            show={true}
            type="underline"
            className={styles.greeting}
            animationDuration={800}
          >
            I’m Kacper
          </RoughNotation>
          <p className={styles.myTitle}>a web developer</p>
          <a href="https://github.com/kacperwitkowski" target={"_blank"}>
            <button className={styles.helloButton}>View Github</button>
          </a>
          <a
            href="https://www.linkedin.com/in/kacper-witkowski-899279234/"
            target={"blank"}
          >
            <button className={styles.helloButton}>View Linkedin</button>
          </a>
        </div>
        <div className={styles.longOne}>
          <p>
            I’m an young, ambitious front-end developer with 3 years of learning
            and 2 years of working experience. I’m experienced in technologies
            such as
            <RoughNotation
              animationDelay={900}
              animationDuration={600}
              color="firebrick"
              show={true}
              padding={[5, -2, 5, -2]}
              multiline={true}
              type="box"
            >
              <span> Javascript , Typescript , Node JS </span>
            </RoughNotation>
            and modern libraries like
            <RoughNotation
              animationDelay={1600}
              animationDuration={600}
              color="#0079ff"
              padding={[0, -2, 0, -2]}
              show={true}
              multiline={true}
              type="circle"
            >
              <span style={{ padding: "5px" }}> React and Next.js</span>
            </RoughNotation>
            👨🏻‍💻
          </p>
          <p>
            I’m an self taught programmer, which started his journey back in the
            2019 when I decided to start studying programming in Poland. After
            3.5 years I graduated and now I have{""}
            <RoughNotation
              color="cadetblue"
              show={true}
              type="underline"
              multiline={true}
              padding={[0, 0, 1, 0]}
              animationDelay={2300}
              animationDuration={600}
            >
              <span style={{ padding: "5px" }}>
                Bachelor Degree in Computer Science
              </span>
            </RoughNotation>
            👨🏽‍🎓
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
