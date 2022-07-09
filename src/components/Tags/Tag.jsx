import styled from '@emotion/styled';

const Tag = ({ data }) => {
  if (data.name) {
    return (
      <Container>
        <span>#{data.name}</span>
      </Container>
    );
  } else {
    return (
      <Container>
        <span>#{data}</span>
      </Container>
    );
  }
};

export default Tag;

const Container = styled.div`
  display: inline-block;
  margin-right: 10px;
  padding: 3px 0;
  span {
    color: var(--color-grey-text);
    font-weight: 200;
    font-size: var(--fontSize-base);
  }
`;
