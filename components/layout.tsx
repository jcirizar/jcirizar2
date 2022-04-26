import Footer from './footer';
import Meta from './meta';
import Header from './header.module';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  return (
    <>
      <Meta/>
      <Header/>
      <main className={pathname === '/' ? 'home' : ''}>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
