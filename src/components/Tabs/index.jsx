import styled from '@emotion/styled';
import { useState } from 'react';

const Tabs = ({ tabTitle, target, setTarget }) => {
  return (
    <Container>
      {tabTitle &&
        tabTitle.map((title, key) => (
          <Tab
            key={key}
            onClick={() => {
              setTarget(key);
            }}
          >
            <h2>{title}</h2>
            {target === key ? <TabLine></TabLine> : <></>}
          </Tab>
        ))}
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0 1.2rem;
  padding: 10px 0;
  margin-bottom: 50px;
`;

const Tab = styled.div`
  cursor: pointer;
  height: 50px;
  h2 {
    margin: 0.8rem;
    font-size: var(--fontSize-lg);
    font-weight: 500;

    :hover {
      color: var(--color-yellow);
    }
  }
`;

const TabLine = styled.div`
  height: 3px;
  background-color: var(--color-yellow);
`;
