import Layout from '../components/layout';
import Head from 'next/head';
import { CMS_NAME, DESCRIPTION, VISIT } from '../lib/constants';
import WaterJugSolverComponent from '../components/water-jug-solver';

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} | Water Jug Solver</title>
        </Head>
        <section>
          <WaterJugSolverComponent />
        </section>
      </Layout>
    </>
  );
};

export default Index;
