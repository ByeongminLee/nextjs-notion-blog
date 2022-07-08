import styled from '@emotion/styled';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  margin: 70px 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 940px;
  padding: 0 20px;
`;
