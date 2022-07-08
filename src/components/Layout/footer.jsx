import styled from '@emotion/styled';

const footer = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <span>© 2022</span>
          <a href="https://github.com/ByeongminLee" target="_blank" rel="noreferrer">
            BYEONGMIN LEE
          </a>
          &nbsp;
          <span>powered by</span>
          <a href="https://github.com/ByeongminLee/nextjs-notion-blog" target="_blank" rel="noreferrer">
            nextjs-notion-blog
          </a>
        </div>
      </Wrapper>
    </Container>
  );
};

export default footer;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  font-size: var(--fontSize-sm);

  font-weight: 300;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 940px;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 5px;
    a {
      text-decoration: underline;
      color: var(--color-link);
    }
  }
`;
