import Link from "next/link";
import Icon from "../../Icon";
import styles from "./WorkCard.module.css";

const WorkCard = (props) => {
  const bgColors = ["#29303b", "firebrick", "#4182a7", "rgb(254,193,68)"];

  const {
    index,
    slug,
    document: {
      data: { title, description, tech, featuredImg },
    },
  } = props;

  return (
    <Link href="/work/[id]" as={`/work/${slug}`}>
      <a className={styles.card} style={{ background: bgColors[index % 4] }}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.tech}>
            {tech.split(", ").map((el) => (
              <div key={el} className={styles.techIcon}>
                <Icon white>{el}</Icon>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.images}>
          <img src={featuredImg} alt={title} />
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;
