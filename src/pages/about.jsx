import * as React from 'react';
import { graphql } from 'gatsby';
import Layout, { Column } from '../components/layout';
import PageTitle from '../components/page-title';
import DisplayFont from '../components/display-font';
import Seo from '../components/seo';
import AuthorCard from '../components/author-card';

const AboutPage = ({ data }) => {
  const { siteMetadata: { name: siteName }} = data.site;
  const portraitStyle = {
    margin: '0  24px 1rem 0',
  };

  return (
    <Layout>
      <Seo
        title="About"
        description={
          `What kind of software and audio engineering posts can you find on ${siteName}? How did the blog get started? Your questions answered!` 
        }
      />

      <PageTitle>What's {siteName} All About?</PageTitle>
      <Column size="1-2">
        <DisplayFont as="h2">About the Blog</DisplayFont>
        <p>
          This blog covers frontend engineering, music, and programmatic audio.
        </p>
      </Column>
      <Column size="1-2">
        <AuthorCard embedded />
      </Column>
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
