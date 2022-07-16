import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styled from '@emotion/styled';
import { DATABASE_ID } from '@/lib/notions/notionKey';
import { getDatabase, getTags } from '@/lib/notions/notionAPI';
import Tabs from '@/components/Tabs';
import PostsContainer from '@/components/PostsContainer';
import TagsContainer from '@/components/TagsContainer';
import SeriesContainer from '@/components/SeriesContainer';
import Meta from '@/components/Meta';
import seriesHandler from '@/lib/Handler/seriesHandler';
import tagListHandler from '@/lib/Handler/tagListHandler';

export default function Home({ posts }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [target, setTarget] = useState(0);
  const [tagsList, setTagsList] = useState([]);
  const tabTitle = ['POSTS', 'SERIES', 'TAGS'];
  const seriesObj = seriesHandler(posts);

  useEffect(() => {
    let tagListData;
    if (posts) {
      tagListData = tagListHandler(posts);
    }
    setTagsList(tagListData);
  }, [posts]);

  // dark-mode re-render 깜빡임 방지
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <Meta />
      <Tabs tabTitle={tabTitle} target={target} setTarget={setTarget} />

      {target === 0 ? (
        <PostsContainer dataList={posts} />
      ) : target === 1 ? (
        <SeriesContainer seriesObj={seriesObj} />
      ) : (
        <TagsContainer tagsList={tagsList} />
      )}
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
