import Button from '@/components/Button';
import styled from '@emotion/styled';
import Link from 'next/link';

const Error = ({ statusCode }) => {
  return (
    <Container>
      <Card>
        <Text>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</Text>
        <Link href="/">
          <a>
            <Button text="HOME" />
          </a>
        </Link>
      </Card>
    </Container>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Card = styled.div`
  text-align: center;
  align-content: space-between;
  display: block;
`;
const Text = styled.div`
  height: 50px;
`;
