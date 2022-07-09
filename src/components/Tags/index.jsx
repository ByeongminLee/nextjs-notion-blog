import styled from '@emotion/styled';
import { useEffect } from 'react';
import Tag from '@/components/Tags/Tag';

const Tags = ({ data }) => {
  return (
    <TagsContainer>
      {data.map((tag, key) => (
        <Tag key={key} data={tag} />
      ))}
    </TagsContainer>
  );
};

export default Tags;
const TagsContainer = styled.div`
  padding: 7px 0;
`;
