import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import PostList from '../components/post-list';
import Container from '../components/container';
import Seo from '../components/seo';

const PostsPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo
        title={`Posts tagged as ${pageContext.tag}`}
        description={
          `Featuring the blog posts about ${pageContext.tag}, web application development, programmatic audio, and more.`
        }
      />

      <Container large>
        <PageTitle>Posts Tagged: {pageContext.tag}</PageTitle>
        <PostList posts={data.allMdx.nodes} />
      </Container>
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
