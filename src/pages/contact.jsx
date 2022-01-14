import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Info"
        description="Got comments, questions, or feedback for Code/Audio? This is the right place!"
      />

      <h1>Contact Info</h1>
      <p>This'll be the "contact" page</p>
    </Layout>
  );
};

export default ContactPage;
