import Head from 'next/head';
import { DATABASE_ID } from '../lib/notionKey';
import { getDatabase } from '../lib/notion';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>nextjs notion blog</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(DATABASE_ID);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
