import styled from '@emotion/styled';

const IndexCard = ({ indexList }) => {
  return (
    <Container>
      {indexList.map((value, key) => (
        <a key={key} href={`#${value[value.type].rich_text[0].plain_text}`}>
          <p className={`index-list index-${value.type}`}>{value[value.type].rich_text[0].plain_text}</p>
        </a>
      ))}
    </Container>
  );
};

export default IndexCard;

const Container = styled.div`
  position: sticky;
  top: 170px;
  width: 400px;
  padding: 10px;
  padding-left: 160px;
  margin-top: 250px;
`;
