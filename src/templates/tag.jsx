import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import PostList from '../components/post-list';

const PostsPage = (props) => {
  console.log('props', props);
  return (
    <Layout>
      <h1>Posts Tagged as ...</h1>
      <hr />

      {/* <PostList posts={data.allMdx.nodes} /> */}
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  query ($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: {in: [$tag]}}}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          tags
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
          description
          title
        }
        id
        slug
      }
    }
  }
`;
