import styled from '@emotion/styled';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Link href="/">
            <a>
              <h1>nextjs-notion-blog</h1>
            </a>
          </Link>
          <ThemeToggle />
        </div>
      </Wrapper>
    </Container>
  );
};

export default navbar;

const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-navbar-bg);
  border-bottom: 1px solid var(--color-line);
  box-shadow: var(--color-shadow);
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
      line-height: 57px;
    }
  }
`;
