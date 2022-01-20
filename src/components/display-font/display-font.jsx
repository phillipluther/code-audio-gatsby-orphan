import * as React from 'react';
import classnames from 'classnames';
import * as styles from './display-font.module.css';

const DisplayFont = ({
  as: Tag = 'h2',
  children,
  className,
  light = false,
  size = 'md',
  loose = false,
  ...props
}) => (
  <Tag
    className={classnames(styles.base, styles[size], {
      [styles.loose]: loose === true,
      [styles.tight]: loose === false,
      [styles.light]: light === true,
    }, className)}
    {...props}
  >
    {children}
  </Tag>
);

export default DisplayFont;
