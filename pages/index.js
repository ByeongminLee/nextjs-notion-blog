import Head from 'next/head';
import { useTheme } from 'next-themes';
import styled from '@emotion/styled';
import { DATABASE_ID } from '../lib/notionKey';
import { getDatabase } from '../lib/notion';
import { useEffect, useState } from 'react';

export default function Home({ posts }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div>
      <h1>nextjs notion blog</h1>
      <div>
        The current theme is: {theme}
        <Button onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>theme toggle</Button>
      </div>
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

const Button = styled.button`
  color: var(--primary-color);
`;
