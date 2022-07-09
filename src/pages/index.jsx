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

export default function Home({ posts }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [target, setTarget] = useState(0);
  const [tagsList, setTagsList] = useState([]);
  const tabTitle = ['POSTS', 'SERIES', 'TAGS'];

  const getTagList = dataList => {
    const dupArr = [];
    dataList.map(data => {
      if (data.properties.Tags.multi_select.length !== 0) {
        data.properties.Tags.multi_select.map(value => {
          dupArr.push(value.name);
        });
      }
    });
    const set = new Set(dupArr);
    setTagsList([...set]);
  };

  useEffect(() => {
    if (posts) getTagList(posts);
  }, [posts]);

  const seriesHandler = seriesPosts => {
    const obj = new Object();
    seriesPosts.map(data => {
      const seriesValue = data.properties.Series.select;
      if (seriesValue !== null) {
        if (!obj[`${seriesValue.name}`]) {
          obj[`${seriesValue.name}`] = new Array();
        }
        obj[`${seriesValue.name}`].push(data.properties);
      }
    });
    return obj;
  };

  const seriesObj = seriesHandler(posts);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
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

const Button = styled.button`
  color: var(--primary-color);
`;
