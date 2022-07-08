import styled from '@emotion/styled';

const Button = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <p>{text}</p>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  width: 100%;

  padding: 10px 5px;
  border-radius: 5px;
  background-color: var(--color-button-bg);

  @media screen and (max-width: 720px) {
    padding: 8px 4px;
  }

  cursor: pointer;
  p {
    color: var(--color-button-text);
    font-size: var(--fontSize-base);
    text-align: center;
    margin: 0;

    @media screen and (max-width: 540px) {
      font-size: var(--fontSize-sm);
    }
  }
`;
