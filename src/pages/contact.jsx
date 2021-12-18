import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Info"
        description="Need to get in touch with Phil or [That] 101? This is the right place!"
      />

      <h1>Contact Info</h1>
      <p>This'll be the "contact" page</p>
    </Layout>
  );
};

export default ContactPage;
