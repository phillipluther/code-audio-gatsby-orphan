import * as React from 'react';
import { graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import Layout, { Column } from '../components/layout';
import DisplayFont from '../components/display-font';
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

      <PageTitle>{siteMetadata.name} Contact Info</PageTitle>

      <Column size="lg">
        <DisplayFont as="h2">Get In Touch!</DisplayFont>
        <p>
          Got questions, comments, ideas, or feedback for {siteMetadata.name}?
          Found some errata and itching to well-actually a post?
          Came across something busted on the site?
        </p>
      </Column>

      <Column size="sm" aside>
        <VisuallyHidden as="h2">Contact Us Via</VisuallyHidden>
        <DisplayFont as="p" size="xs">Email:</DisplayFont>
        <p>hello@code.audio</p>
      </Column>
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

