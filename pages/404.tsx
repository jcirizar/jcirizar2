import Head from 'next/head';
import Layout from '../components/layout';
import { CMS_NAME } from '../lib/constants';
import Container from '../components/container';


const Custom404 = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>404 | {CMS_NAME}</title>
        </Head>
        <Container>
          <h1>404 | Page Not Found.</h1>
        </Container>
      </Layout>
    </>
  );
};

export default Custom404;
