import styled from '@emotion/styled';
import Button from '../Button';
import PostCard from './PostCard';

const PostsContainer = ({ dataList }) => {
  const moreHandler = () => {};
  return (
    <div>
      {dataList?.map((data, key) => (
        <Container key={key}>
          <PostCard data={data} />
        </Container>
      ))}
      <MoreContainer>
        <Button text={'MORE'} onClick={moreHandler} />
      </MoreContainer>
    </div>
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
