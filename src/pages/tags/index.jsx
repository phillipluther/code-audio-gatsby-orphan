import * as React from 'react';
import { Link, graphql } from 'gatsby';
import slugify from 'slugify';
import Layout from '../../components/layout';

const TagsPage = ({ data }) => (
  <Layout>
    <h1>Browse Posts by Category Tags</h1>
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
