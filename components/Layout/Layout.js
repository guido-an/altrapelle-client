import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <>
      {/* <Banner>
        <p>
          Saremo <strong>chiusi per ferie dal 5 al 22 agosto</strong>. Le spedizioni ripartiranno
          quindi dal 23 Agosto. Vi ringraziamo e vi auguriamo buone vacanze!
        </p>
      </Banner> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  position: relative;
  padding: 10px;
  bottom: 10px;
  p {
    color: #fff;
    text-align: center;
    font-size: 14px;
    padding: 0;
  }
`;
