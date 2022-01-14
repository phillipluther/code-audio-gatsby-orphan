import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout>

      <Seo
        title="About"
        description="Learn more about this site and its author"
      />

      <h1>About Code/Audio</h1>
      <p>This'll be the "about" page</p>
    </Layout>
  );
};

export default AboutPage;
