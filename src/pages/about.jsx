import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn more about this site and its author"
      />

      <h1>About {data.site.siteMetadata.name}</h1>
      <p>This'll be the "about" page</p>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
  }
`;
