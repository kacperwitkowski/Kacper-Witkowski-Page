import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Line from "../../components/Line";
import SEO from "../../components/SEO";
import Sidebar from "../../components/WorkSidebar";
import WorksContext from "../../Works.Context";
import styles from "./work.module.css";
import { RoughNotation } from "react-rough-notation";
import Scroll from "../../components/Scroll/scroll";

const WorkInfo = ({ data, data: { title, website }, content }) => {
  return (
    <>
      <div className={styles.workWrapper}>
        <div className={styles.workInfo}>
          <div className={styles.topContainer}>
            <Line />
            <div className={styles.topInfo}>
              <h1 className={styles.workTitle}>{title}</h1>
              <div className={styles.container}>
                <div className={styles.inner}>
                  {content ? <ReactMarkdown source={content} /> : "loading"}
                  {website && (
                    <a
                      className={styles.websiteLink}
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website
                    </a>
                  )}
                </div>
                <Sidebar {...data} />
              </div>
            </div>
          </div>
        </div>
        <Scroll />
      </div>
    </>
  );
};
const Post = () => {
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add(styles.withAnim);
    }, 0);
  }, [id]);

  const works = useContext(WorksContext);

  const {
    document: { data, content },
    images,
  } = works.find((w) => w.slug === id);

  const P = ({ children }) => {
    if (
      children &&
      children[0] &&
      children.length === 1 &&
      children[0].props &&
      children[0].props.src
    ) {
      return children;
    }

    return <p>{children}</p>;
  };

  const Img = ({ alt, src }) => {
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });

    return (
      <Link href={src}>
        <a target="_blank" rel="noopener noreferrer">
          <div
            className={[
              styles.imgContainer,
              inView ? styles.imgContainerAnim : "",
            ].join(" ")}
            ref={ref}
          >
            <img srcSet={`${src} 2x`} alt={alt} />
          </div>
        </a>
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <SEO
        title={data.title}
        description={"Single post"}
        image={data.featuredImg}
      />
      <Header />
      <article className={styles.work}>
        <WorkInfo data={data} content={content} />
        <div className={styles.workImages}>
          <div className={styles.images}>
            <ReactMarkdown
              source={images.content}
              renderers={{ image: Img, paragraph: P }}
            />
          </div>
        </div>
      </article>
      <Footer noBorder />
    </>
  );
};

export default Post;
