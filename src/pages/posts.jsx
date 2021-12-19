import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import Seo from '../components/seo';

const PostsPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="All Blog Posts"
        description="Featuring the latest posts from [That] 101 and covering a wide range of topics"
      />
      <h1>All Blog Posts</h1>
      <hr />

      <PostList posts={data.allMdx.nodes} />
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }  
          date
          description
          tags
          title
        }
        id
        body
        slug
      }
    }
  }
`;
