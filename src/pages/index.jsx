import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout isHome>
      <Seo title="Home" />

      <h2>[That] 101</h2>
      <p>Home Page</p>
    </Layout>
  );
};

export default IndexPage;
