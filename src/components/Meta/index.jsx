import Head from 'next/head';

const Meta = ({ title, keyword, description, url, image, favicon }) => {
  return (
    <Head>
      {/* 기본 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta name="language" content="Korean" />
      <meta name="author" content="byeongminLee" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" type="image/png" href={favicon} />
      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ko" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Apple */}
      <link rel="apple-touch-icon" href="/custom-icon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: 'nextjs-notion-blog',
  keyword: 'nextjs, notion, blog, tech',
  description: 'nextjs blog using notion API',
  url: 'http://localhost:3000/',
  image: 'http://localhost:3000/image.png',
  favicon: 'http://localhost:3000/favicon.png',
};
