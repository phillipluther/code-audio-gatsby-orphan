import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;

  return (
    <Layout isHome>
      <Seo title="Home" />

      <h2>{siteMetadata.siteName}</h2>
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
