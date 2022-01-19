import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import PageTitle from '../components/page-title';
import Container from '../components/container';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
  const { name: siteName } = data.site.siteMetadata;
  return (
    <Layout>
      <Seo
        title="All Blog Posts"
        description={
          `Featuring the latest posts from ${siteName} and covering a wide range of topics`
        }
      />

      <Container large>
        <PageTitle>All Blog Posts</PageTitle>
        <PostList posts={data.allMdx.nodes} />
      </Container>

    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
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
