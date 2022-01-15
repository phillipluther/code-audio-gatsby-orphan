import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Seo from '../components/seo';

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;

  return (
    <Layout isHome>
      <Seo title="Home" />

      <Heading>{siteMetadata.siteName}</Heading>
      <p>Home Page</p>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName: name
      }
    }
  }
`;
