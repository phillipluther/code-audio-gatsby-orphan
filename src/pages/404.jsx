import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ErrorPage = () => {
  return (
    <Layout>
      <Seo
        title="Page Not Found"
        description="The requested page doesn't exist. Or rather, it doesn't exist here."
      />

      <h1>Ack! Page Not Found</h1>
      <p>The requested page doesn't exist. Or rather, it doesn't exist <em>here</em>.</p>
      <p>Double check the address and try again. You can use search or that nav links to back on track, too.</p>
    </Layout>
  );
};

export default ErrorPage;
