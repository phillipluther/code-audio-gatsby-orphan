import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import VisuallyHidden from '@reach/visually-hidden';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import TagList from '../components/tag-list';
import Date from '../components/date';
import Seo from '../components/seo';
import AuthorCard from '../components/author-card';

const BlogPost = ({ data }) => {
  const {
    title,
    description,
    cover,
    cover_alt: coverAlt,
    cover_credit: coverCredit,
    cover_credit_link: coverCreditLink,
    tags,
    date,
  } = data.mdx.frontmatter;

  const image = getImage(cover);

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        keywords={tags}
        /* TODO: Revisit sizing on these? */
        image={image.images.fallback.src}
        article
      />

      <article>
        <header>
          <PageTitle>{title}</PageTitle>
          <Date dateString={date} />
          <p>{description}</p>

          <figure>
            <GatsbyImage image={image} alt={coverAlt} />
            <figcaption>
              <cite>
                Photo Credit:
                {' '}
                <a href={coverCreditLink}>{coverCredit}</a>
              </cite>
            </figcaption>
          </figure>
        </header>

        <MDXRenderer>{data.mdx.body}</MDXRenderer>

        <footer>
          <VisuallyHidden as="h2">Supplemental Content</VisuallyHidden>

          <section>
            <h3>More Like This</h3>
            <TagList tags={tags} />
          </section>

          <AuthorCard as="section" />
        </footer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
        cover_alt
        cover_credit
        cover_credit_link
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
