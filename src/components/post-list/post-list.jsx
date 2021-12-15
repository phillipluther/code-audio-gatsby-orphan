import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import * as styles from './post-list.module.css';

const PostList = ({ className, posts, title = 'All Blog Posts' }) => {
  
  return (
    <>
      <VisuallyHidden as="h2">{title}</VisuallyHidden>

      <ul className={classnames(styles.list, className)}>
        {posts.map(({ frontmatter, id, body }) => (
          <li className={styles.item} key={id}>
            <article className={styles.summary}>
              <header className={styles.header}>
                <h3 className={styles.title}>{frontmatter.title}</h3>
                <time className={styles.date} datetime={new Date(frontmatter.date)}>
                  {frontmatter.date}
                </time>
              </header>

              <p className={styles.description}>{frontmatter.description}</p>

              <footer className={styles.footer}>
                <Link to={id} className={styles.link}>
                  Read More
                  <VisuallyHidden>{` | ${frontmatter.title}`}</VisuallyHidden>
                </Link>

                <p>Tags</p>
                <ul>
                  {frontmatter.tags.map((tagName) => (
                    <li key={tagName}>{tagName}</li>
                  ))}
                </ul>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
