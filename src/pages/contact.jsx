import * as React from 'react';
import { graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import Layout, { Column } from '../components/layout';
import DisplayFont from '../components/display-font';
import PageTitle from '../components/page-title';
import Seo from '../components/seo';
import ContactInfo from '../components/contact-info';

const ContactPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const contactLinks = siteMetadata.social.reduce((links, { link, name}) => {
    if (['twitter', 'email'].includes(name)) {
      links[name] = link;
    }

    return links;
  }, {});

  return (
    <Layout>
      <Seo
        title="Contact Info"
        description={
          `Got comments, questions, or feedback for ${siteMetadata.name}? This is the right place!`
        }
      />

      <PageTitle>{siteMetadata.name} Contact Info</PageTitle>

      <Column size="2-3">
        <DisplayFont as="h2">Get In Touch!</DisplayFont>
        <p>Questions, comments, ideas, or feedback for {siteMetadata.name}?</p> 
        <p>Found something wonky with the site itself?</p>
        <p>Let us know!</p>
        <p>
          <a href={contactLinks.email}>Email</a>{' '}
          is the best way to get in touch because we're old-fashioned like that. We're
          infrequently active on <a href={contactLinks.twitter}>Twitter</a>, as well, so a
          well-timed and thoughtful at-mention also
          works.
        </p>
        <p>
          If you do email us, rest assured your email will never ever be used for anything other than writing you back.
        </p>
      </Column>

      <Column size="1-3" aside>
        <VisuallyHidden as="h2">Contact Methods</VisuallyHidden>
        <ContactInfo />
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
        social {
          name
          link
        }
      }
    }
  }
`;

