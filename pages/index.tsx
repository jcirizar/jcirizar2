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
        <article className="text-center">
          Result-oriented software developer with 8 years of experience writing, testing and deploying high quality
          web, mobile and server-side applications.
        </article>
        <aside>
          <Link href="/posts">
            <a className="hover:underline font-bold">
              Visit the blog
            </a>
          </Link>
        </aside>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {

  return {
    props: {},
  };
};
