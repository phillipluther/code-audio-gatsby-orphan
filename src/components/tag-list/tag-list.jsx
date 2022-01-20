import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import slugify from 'slugify';
import * as styles from './tag-list.module.css';

const TagList = ({ tags, className, ...props }) => (
  <ul className={classnames(styles.list, className)} {...props}>
    {tags.map((tagName) => (
      <li key={tagName}>
        <Link to={`/tags/${slugify(tagName)}`} className={styles.link}>{tagName}</Link>
      </li>
    ))}
  </ul>
);

export default TagList;
