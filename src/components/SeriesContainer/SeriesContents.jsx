import styled from '@emotion/styled';

const SeriesContents = ({ data }) => {
  const title = data.Title.title[0].plain_text;
  const description = data.Description.rich_text.length !== 0 ? data.Description.rich_text[0].plain_text : null;

  return (
    <Container>
      <h4>{title}</h4>
      <p>{description}</p>
    </Container>
  );
};

export default SeriesContents;

const Container = styled.div`
  margin: 0;
  border: 1px solid var(--color-line-hr);
  border-left: 4px solid var(--color-line-hr);
  border-radius: 3px;
  padding: 11px 10px;
  margin: 20px 0;

  h4 {
    font-size: var(--fontSize-md);
  }

  p {
    margin-top: 8px;
    color: var(--color-primary-text);
    font-size: var(--fontSize-sm);
  }

  :hover {
    border: 1px solid var(--color-yellow);
    border-left: 4px solid var(--color-yellow);
  }

  @media screen and (max-width: 720px) {
    h4 {
      font-size: font-size: var(--fontSize-base);
    }
    p {
      margin-top: 5px;
      font-size: calc(var(--fontSize-sm) - 0.05rem);
    }
  }
  @media screen and (max-width: 540px) {
    h4 {
      font-size: var(--fontSize-base);
    }
    p {
      margin-top: 3px;
      font-size: calc(var(--fontSize-sm) - 0.1rem);
    }
  }
`;
