import Layout from '../components/layout';
import Head from 'next/head';
import { CMS_NAME, DESCRIPTION, VISIT } from '../lib/constants';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <article>
          {DESCRIPTION}
        </article>
        <aside>
          <Link href="/posts">
            <a className="visit">
              {VISIT}
            </a>
          </Link>
        </aside>
      </Layout>
    </>
  );
};

export default Index;
