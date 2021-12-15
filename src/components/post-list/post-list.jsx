import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import Date from '../date';
import TagList from '../tag-list';
import * as styles from './post-list.module.css';

const PostList = ({ className, posts, title = 'All Blog Posts' }) => {
  
  return (
    <>
      <VisuallyHidden as="h2">{title}</VisuallyHidden>

      <ul className={classnames(styles.list, className)}>
        {posts.map(({ frontmatter, id, slug }) => (
          <li className={styles.item} key={id}>
            <article className={styles.summary}>
              <header className={styles.header}>
                <h3 className={styles.title}>{frontmatter.title}</h3>
                <Date dateString={frontmatter.date} />
                {/* <time className={styles.date} dateTime={new Date(frontmatter.date).getTime()}>
                  {frontmatter.date}
                </time> */}
              </header>

              <p className={styles.description}>{frontmatter.description}</p>

              <footer className={styles.footer}>
                <Link to={`/${slug}`} className={styles.link}>
                  Read More
                  <VisuallyHidden>{` | ${frontmatter.title}`}</VisuallyHidden>
                </Link>

                <section aria-label="Related Topics">
                  <TagList tags={frontmatter.tags} />
                </section>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
