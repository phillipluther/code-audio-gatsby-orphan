import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import Date from '../date';
import TagList from '../tag-list';
import * as styles from './post-list.module.css';

const PostList = ({ className, posts, title = 'All Blog Posts' }) => (
  <>
    <VisuallyHidden as="h2">{title}</VisuallyHidden>

    <ul className={classnames(styles.list, className)}>
      {posts.map(({ frontmatter, id, slug }) => {
        const postUrl = `/${slug}`;

        return (
          <li className={styles.item} key={id}>
            <article className={styles.summary}>
              <header className={styles.header}>
                <h3 className={styles.title}>
                  <Link to={postUrl}>{frontmatter.title}</Link>
                </h3>
                <Date dateString={frontmatter.date} />

                {frontmatter.cover && (
                  <Link to={postUrl}>
                    <GatsbyImage
                      tabIndex={-1}
                      image={getImage(frontmatter.cover)}
                      alt=""
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </header>

              <p className={styles.description}>{frontmatter.description}</p>

              <footer className={styles.footer}>
                <Link to={postUrl} className={styles.link}>
                  Read More
                  <VisuallyHidden>{` | ${frontmatter.title}`}</VisuallyHidden>
                </Link>

                <section aria-label="Related Topics">
                  <TagList tags={frontmatter.tags} />
                </section>
              </footer>
            </article>
          </li>
        );
      })}
    </ul>
  </>
);

export default PostList;
