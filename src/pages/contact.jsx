import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import Seo from '../components/seo';

const ContactPage = ({ data }) => {
  const { siteMetadata } = data.site;
  return (
    <Layout>
      <Seo
        title="Contact Info"
        description={
          `Got comments, questions, or feedback for ${siteMetadata.name}? This is the right place!`
        }
      />

      <PageTitle>Contact Info</PageTitle>
      <p>This'll be the "contact" page</p>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

