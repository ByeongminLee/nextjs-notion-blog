import styled from '@emotion/styled';

const IndexCard = ({ indexList }) => {
  console.log('test', indexList);
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
  width: 100%;
  border: 1px solid red;
  padding: 10px;
`;
