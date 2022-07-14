import { useEffect } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { getBlocks, getDatabase, getPage } from '@/lib/notions/notionAPI';
import { DATABASE_ID } from '@/lib/notions/notionKey';
import { RenderBlock } from '@/lib/notions/RenderBlock';
import Tags from '@/components/Tags';
import IndexCard from '@/components/IndexCard';
import useResponsive from '@/hooks/useResponsive';

const Post = ({ page, blocks }) => {
  const { size } = useResponsive();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!page || !blocks) {
    return <div />;
  }

  const indexList = blocks
    .filter(block => {
      return block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3';
    })
    .map(item => item);

  console.log(indexList);

  const date = page.properties.Date.date !== null ? page.properties.Date.date.start : null;
  const series = page.properties.Series.select !== null ? page.properties.Series.select.name : null;
  const tagsData = page.properties.Tags.multi_select;

  const dateHandler = date => {
    if (!date) return { year: '00', month: '00', day: '00' };
    const year = date.substring(0, 4);
    const month = parseInt(date.substring(5, 7));
    const day = parseInt(date.substring(8, 10));
    return { year, month, day };
  };

  const { year, month, day } = dateHandler(date);

  return (
    <Container>
      {page.cover ? <PostCover img={page.cover.external.url} /> : null}

      <PostInfo>
        {series ? <Series>{series}</Series> : null}
        <h2>{page.properties.Title.title[0].plain_text}</h2>
        <TagsContainer>
          <Tags data={tagsData} />
        </TagsContainer>
      </PostInfo>

      <PostDate>
        <Image src="/icon/calender.png" alt="calender" width={14} height={14} />
        <span>
          {year}년 {month}월 {day}일
        </span>
      </PostDate>

      {blocks.map(block => {
        return RenderBlock(block);
      })}

      {size && size > 1140 ? <SideCard>{indexList.length > 0 ? <IndexCard indexList={indexList} /> : null}</SideCard> : null}
    </Container>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const database = await getDatabase(DATABASE_ID);
  return {
    paths: database.map(page => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async context => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter(block => block.has_children)
      .map(async block => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      }),
  );

  const blocksWithChildren = blocks.map(block => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(x => x.id === block.id)?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
const Container = styled.div`
  position: relative;
`;

const SideCard = styled.div`
  position: absolute;
  top: 10px;
  right: -120px;
  max-width: 300px;
  height: 100%;
`;

const PostCover = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  border-radius: 3px;
`;

const PostInfo = styled.div`
  margin-top: 30px;

  h2 {
    font-size: var(--fontSize-3xl);
  }
`;

const PostDate = styled.div`
  text-align: left;
  margin-bottom: 50px;

  span {
    font-size: var(--fontSize-sm);
    padding: 0 5px;
    vertical-align: top;
    color: var(--color-grey-text);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0;
`;

const Series = styled.h4`
  color: var(--color-grey-text);
  font-size: var(--fontSize-sm);
  font-weight: 900;
  margin: 0;
`;
