import { useEffect } from 'react';
import PostCard from './PostCard';

const PostsContainer = ({ dataList }) => {
  console.log('1123', dataList);
  return (
    <div>
      {dataList?.map((data, key) => (
        <div key={key}>
          {data?.id}
          <PostCard data={data} />
        </div>
      ))}
    </div>
  );
};

export default PostsContainer;
