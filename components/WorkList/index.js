import React, { useContext } from "react";
import WorksContext from "../../Works.Context";
import Footer from "../Footer";
import WorkCard from "./WorkCard";
import styles from "./WorkList.module.css";

const WorkList = () => {
  const works = useContext(WorksContext);

  return (
    <>
      <div className={styles.workContainer}>
        <h2 className={styles.title}>My proudest babies (Projects)</h2>
        <div className={styles.workList}>
          {works
            .sort((a, b) => {
              return a.document.data.value - b.document.data.value;
            })
            .map((work, i) => (
              <WorkCard key={work.slug} index={i} {...work} />
            ))}
        </div>
        <div className={styles.githubLinkContainer}>
          <a
            className={styles.githubLink}
            target={"_blank"}
            href="https://github.com/kacperwitkowski"
          >
            Check more my projects on my github
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkList;
