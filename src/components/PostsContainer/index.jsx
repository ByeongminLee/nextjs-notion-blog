import styled from '@emotion/styled';
import { useState } from 'react';
import Button from '../Button';
import PostCard from './PostCard';

const PostsContainer = ({ dataList }) => {
  const [postsData] = useState(dataList);
  const [limit, setLimit] = useState(5);
  const [maxLimit] = useState(dataList.length);
  const moreHandler = () => {
    if (limit < maxLimit) setLimit(limit + 5);
    else setLimit(dataList.length);
  };
  return (
    <>
      {postsData &&
        postsData
          ?.filter(item => postsData.indexOf(item) < limit)
          .map((post, key) => (
            <Container key={key}>
              <PostCard post={post} />
            </Container>
          ))}
      {maxLimit <= limit ? null : (
        <MoreContainer>
          <Button text={'MORE'} onClick={moreHandler} />
        </MoreContainer>
      )}
    </>
  );
};

export default PostsContainer;

const Container = styled.div`
  padding: 0 10px 70px 10px;
`;

const MoreContainer = styled.div`
  width: 100px;

  margin: 0 auto;
`;
