import styled from '@emotion/styled';

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>nextjs-notion-blog</h1>
        </div>
      </Wrapper>
    </Container>
  );
};

export default navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-navbar-bg);
  border-bottom: 1px solid var(--color-navbar-border);
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 940px;
  padding: 0 20px;
  height: 60px;
  line-height: 20px;

  div {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: var(--fontSize-xl);
      font-weight: 600;
    }
  }
`;
