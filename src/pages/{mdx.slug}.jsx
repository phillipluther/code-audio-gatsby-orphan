import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import TagList from '../components/tag-list';
import Date from '../components/date';

const BlogPost = ({ data }) => {
  const {
    title,
    description,
    tags,
    date,
  } = data.mdx.frontmatter;

  return (
    <Layout>
      <article>
        <header>
          <h1>{title}</h1>
          <Date dateString={date} />
          <p>{description}</p>
        </header>

        <MDXRenderer>{data.mdx.body}</MDXRenderer>

        <footer>
          <section aria-label="More Like This">
            <TagList tags={tags} />
          </section>
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
