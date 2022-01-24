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
          Have you ever noticed how many software engineers make music? Practically every coder I know programs beats or plays guitar or holds a music degree or, at the very least, fans out for specific genres.
        </p>
        <p>
          This blog covers that union; it's about frontend engineering, music, and programmatic audio. That's not to say every post bundles development <em>and</em> audio, but articles specifically diving into one will contain threads of the other. If you're a musician who codes or a coder who musics, you should find this stuff interesting.
        </p>
        <p>
          So is the goal, at least.
        </p>
        <DisplayFont as="h3">What Kind of Software Engineering?</DisplayFont>
        <DisplayFont as="h3">What Kind of Audio/Music?</DisplayFont>
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
