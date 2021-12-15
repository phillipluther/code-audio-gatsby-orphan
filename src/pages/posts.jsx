import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';

const PostsPage = ({ data }) => {
  return (
    <Layout>
      <h1>All Blog Posts</h1>
      <hr />

      <PostList posts={data.allMdx.nodes} />
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  query MyQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          tags
          title
        }
        id
        body
      }
    }
  }
`;
