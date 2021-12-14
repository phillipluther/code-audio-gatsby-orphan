import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const PostsPage = ({ data }) => {
  return (
    <Layout>
      <h1>All Blog Posts</h1>
      <ul>
        {data.allFile.nodes.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
