import * as React from 'react';
import { Link, graphql } from 'gatsby';
import slugify from 'slugify';
import Seo from '../../components/seo';
import Layout from '../../components/layout';

const TagsPage = ({ data }) => (
  <Layout>
    <Seo
      title="Browse Blog Posts by Tag"
      description="Code/Audio covers a slew of topics, organized by category tags."
      showAuthor={false}
    />

    <h1>Browse Blog Posts by Tag</h1>
    <hr />

    <ul>
      {data.allMdx.group.map(({ totalCount, tag }) => (
        <li key={tag}>
          <Link
            to={`/tags/${slugify(tag)}`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default TagsPage;

export const query = graphql`
  query MyQuery {
    allMdx {
      group(field: frontmatter___tags) {
        totalCount
        tag: fieldValue
      }
    }
  }
`;
