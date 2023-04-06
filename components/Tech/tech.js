import styles from "./Tech.module.css";
import useWindowDimensions from "../WindowDimensHook/WindowDim";
import css3 from "../Icon/css3.svg";
import html5 from "../Icon/html5.svg";
import react from "../Icon/react.svg";
import redux from "../Icon/redux.svg";
import sass from "../Icon/sass.svg";
import next from "../Icon/next.svg";
import js from "../Icon/js.svg";
import docker from "../Icon/docker.svg";
import typescript from "../Icon/typescript.svg";
import node from "../Icon/node.svg";
import git from "../Icon/git.svg";
import restapi from "../Icon/restapi.svg";
import express from "../Icon/express.svg";
import firebase from "../Icon/firebase.svg";
import mongodb from "../Icon/mongodb.svg";
import tailwind from "../Icon/tailwind.svg";

const Tech = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className={styles.tech__intro}>
        <div className={styles.tech__intro__line}>
          <h2>Skills</h2>
          <div className={styles.tech__intro__line__div}></div>
        </div>
      </div>
      <div className={styles.tech}>
        <div className={styles.tech__container}>
          <div className={styles.tech__cartoon}>
            <h3>Wow... Didn't know I'm that good</h3>

            {width >= 800 ? (
              <img src="/images/avt.png" />
            ) : (
              <img src="/images/avatar.png" />
            )}
          </div>
          <div className={styles.tech__words}>
            <div className={styles.tech__words__content}>
              <div>
                <img src={js} alt="js icon" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={typescript} alt="typescript icon" />
                <p>TypeScript</p>
              </div>
              <div>
                <img src={react} alt="react icon" />
                <p>React</p>
              </div>
              <div>
                <img src={redux} alt="redux icon" />
                <p>Redux</p>
              </div>
              <div>
                <img src={next} alt="next icon" />
                <p>Next JS</p>
              </div>
              <div>
                <img src={node} alt="node icon" />
                <p>Node JS</p>
              </div>
              <div>
                <img src={express} alt="express icon" />
                <p>Express JS</p>
              </div>
              <div>
                <img src={mongodb} alt="mongodb icon" />
                <p>MongoDB</p>
              </div>
              <div>
                <img src={html5} alt="html5 icon" />
                <p>HTML5</p>
              </div>
              <div>
                <img src={css3} alt="css3 icon" />
                <p>CSS3</p>
              </div>
              <div>
                <img src={sass} alt="sass icon" />
                <p>Sass</p>
              </div>
              <div>
                <img src={tailwind} alt="tailwind icon" />
                <p>Tailwind</p>
              </div>
              <div>
                <img src={firebase} alt="firebase icon" />
                <p>Firebase</p>
              </div>
              <div>
                <img src={restapi} alt="restapi icon" />
                <p>RESTful API</p>
              </div>
              <div>
                <img src={git} alt="git icon" />
                <p>GIT</p>
              </div>
              <div>
                <img src={docker} alt="docker icon" />
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
