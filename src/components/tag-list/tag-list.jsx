import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import * as styles from './tag-list.module.css';

const TagList = ({ tags, className, ...props }) => (
  <ul className={classnames(styles.list, className)} {...props}>
    {tags.map((tagName) => (
      <li key={tagName} className={styles.item}>
        <Link to={`/tags/${tagName}`} className={styles.link}>{tagName}</Link>
      </li>
    ))}
  </ul>
);

export default TagList;
