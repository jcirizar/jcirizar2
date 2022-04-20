import styles from './header.module.scss';
import { CMS_NAME } from '../lib/constants';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();


  return (
    <header className={styles.header}>
      <h1 className="text-center">
        <Link href="/">
          <a className="hover:underline">{CMS_NAME}</a>
        </Link>
        {router.pathname.startsWith('/posts') ? (
          <>
            <span> | </span>
            <Link href="/posts">
              <a className="hover:underline">Blog</a>
            </Link>
          </>

        ) : ''}
      </h1>
    </header>
  );
};

export default Header;
