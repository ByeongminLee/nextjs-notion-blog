import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styled from '@emotion/styled';
import { DATABASE_ID } from '@/lib/notions/notionKey';
import { getDatabase } from '@/lib/notions/notionAPI';
import Tabs from '@/components/Tabs';
import PostsContainer from '@/components/PostsContainer';

export default function Home({ posts }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [target, setTarget] = useState(0);
  const tabTitle = ['POSTS', 'SERIES', 'TAGS'];

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  console.log(posts);
  return (
    <>
      <Tabs tabTitle={tabTitle} target={target} setTarget={setTarget} />

      {target === 0 ? <PostsContainer dataList={posts} /> : target === 1 ? <p>series</p> : <p>tags </p>}
    </>
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

const Button = styled.button`
  color: var(--primary-color);
`;
