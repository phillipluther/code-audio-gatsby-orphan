const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const tagTemplate = path.resolve('src/templates/tag.jsx');

  const tagsResult = await graphql(`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }  
  `);

  if (tagsResult.errors) {
    reporter.panicOnBuild('GraphQL crashed and/or burned ...');
    return;
  }

  tagsResult.data.allMdx.group.forEach((tag) => {
    createPage({
      path: `/tags/${slugify(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
