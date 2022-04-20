import Footer from './footer';
import Meta from './meta';
import Header from './header.module';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta/>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
