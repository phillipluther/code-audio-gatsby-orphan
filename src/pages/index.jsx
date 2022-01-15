import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import DisplayFont from '../components/display-font';
import Seo from '../components/seo';

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;

  return (
    <Layout isHome>
      <Seo title="Home" />

      <DisplayFont as="h2">{siteMetadata.siteName}</DisplayFont>
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
