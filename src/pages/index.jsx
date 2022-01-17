import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import Seo from '../components/seo';

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;

  return (
    <Layout isHome>
      <Seo title="Home" />

      <PageTitle as="h2">{siteMetadata.siteName}</PageTitle>
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
