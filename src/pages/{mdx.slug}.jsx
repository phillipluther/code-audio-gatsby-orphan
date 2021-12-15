import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
  console.log('DATA', data);

  return (
    <Layout>
      <article>
        <header>
          <h1>{data.mdx.frontmatter.title}</h1>
        </header>

        <MDXRenderer>{data.mdx.body}</MDXRenderer>

        <footer>
          Footer!
        </footer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM, DD YYYY")
        description
        tags
        title
      }
      body
    }
  }
`;

export default BlogPost;
