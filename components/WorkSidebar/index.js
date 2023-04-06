import Icon from "../Icon";
import styles from "./Sidebar.module.css";

const Sidebar = ({ githubLink, tech }) => (
  <div className={styles.sidebar}>
    {githubLink && (
      <Section>
        <p className={styles.title}>Github Link</p>
        <a rel="noreferrer" target={"_blank"} href={githubLink}>
          {githubLink}
        </a>
      </Section>
    )}
    {tech && (
      <Section className={styles.techs}>
        <p className={styles.title}>Tech</p>
        {tech.split(", ").map((t) => (
          <Icon key={t}>{t}</Icon>
        ))}
      </Section>
    )}
  </div>
);

const Section = ({ children, className }) => (
  <div className={[styles.section, className].join(" ")}>{children}</div>
);

export default Sidebar;
