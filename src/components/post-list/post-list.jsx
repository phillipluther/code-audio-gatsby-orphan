import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import Date from '../date';
import DisplayFont from '../display-font';
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
                <DisplayFont as="h3" size="sm" className={styles.title}>
                  <Link to={postUrl}>{frontmatter.title}</Link>
                </DisplayFont>
                <Date dateString={frontmatter.date} className={styles.date} />

                {frontmatter.cover && (
                  <Link to={postUrl} tabIndex="-1" className={styles.cover}>
                    <GatsbyImage
                      tabIndex={-1}
                      image={getImage(frontmatter.cover)}
                      alt=""
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </header>

              <p>{frontmatter.description}</p>

              <footer>
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
