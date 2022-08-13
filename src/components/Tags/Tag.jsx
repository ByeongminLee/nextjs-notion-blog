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
  @media screen and (max-width: 720px) {
    span {
      font-size: calc(var(--fontSize-base) - 0.1rem);
    }
  }
  @media screen and (max-width: 540px) {
    span {
      font-size: var(--fontSize-sm);
    }
  }
`;
