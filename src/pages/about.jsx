import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import Seo from '../components/seo';

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn more about this site and its author"
      />

      <PageTitle>About {data.site.siteMetadata.name}</PageTitle>
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
