import { getBlocks, getDatabase, getPage } from '@/lib/notions/notionAPI';
import { DATABASE_ID } from '@/lib/notions/notionKey';
import { RenderBlock } from '@/lib/notions/RenderBlock';
import { Fragment } from 'react';

const Post = ({ page, blocks }) => {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <>
      {blocks.map(block => {
        return RenderBlock(block);
      })}
    </>
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
