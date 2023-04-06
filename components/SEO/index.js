import Head from 'next/head'

const SEO = ({ title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website"></meta>

      <meta property="og:title" content={title}></meta>

      <meta name="description" content={description}></meta>
      <link href="/common.css" rel="stylesheet" />
    </Head>
  );
}

export default SEO
