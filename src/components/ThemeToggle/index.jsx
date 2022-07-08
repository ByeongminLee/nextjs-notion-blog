import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styled from '@emotion/styled';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Container>
      <Wrapper onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>
        <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
      </Wrapper>
    </Container>
  );
};

export default ThemeToggle;

const Container = styled.div`
  padding: 15px 0;
  vertical-align: middle;
`;

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid var(--color-line);
  background-color: var(--color-toggle-bg);
  border-radius: 100%;
  cursor: pointer;

  span {
    text-align: center;
    vertical-align: middle;
    line-height: 28px;
    width: 30px;
    height: 30px;
  }
`;
