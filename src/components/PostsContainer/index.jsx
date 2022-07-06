import styled from '@emotion/styled';
import PostCard from './PostCard';

const PostsContainer = ({ dataList }) => {
  return (
    <div>
      {dataList?.map((data, key) => (
        <Container key={key}>
          <PostCard data={data} />
        </Container>
      ))}
    </div>
  );
};

export default PostsContainer;

const Container = styled.div`
  padding: 0 10px 70px 10px;
`;
