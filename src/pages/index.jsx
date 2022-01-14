import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout isHome>
      <Seo title="Home" />

      <h2>Code/Audio</h2>
      <p>Home Page</p>
    </Layout>
  );
};

export default IndexPage;
