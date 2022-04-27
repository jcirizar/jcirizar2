import Layout from '../components/layout';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <article>
          Result-oriented Software Engineer with 8 years of experience writing, testing and deploying high quality
          web, mobile and server-side applications.
        </article>
        <aside>
          <Link href="/posts">
            <a className="visit">
              Visit the blog
            </a>
          </Link>
        </aside>
      </Layout>
    </>
  );
};

export default Index;
