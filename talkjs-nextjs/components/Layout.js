import { Meta } from '@/components/Meta';
import { useEffect } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';

const Layout = ({ params, children }) => {
  useEffect(() => {}, []);

  return (
    <>
      <Meta />
      <div className={'page ' + params.page}>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export { Layout };
