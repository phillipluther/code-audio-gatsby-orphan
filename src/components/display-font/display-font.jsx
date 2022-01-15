import * as React from 'react';
import classnames from 'classnames';
import * as styles from './display-font.module.css';

const DisplayFont = ({
  as: Tag = 'h2',
  children,
  className,
  size = 'md',
  loose = false,
  ...props
}) => {
  const lineHeightClass = loose ? styles.loose : styles.tight;
  const sizeClass = styles[size];

  return (
    <Tag
      className={classnames(styles.base, styles[size], {
        [styles.loose]: loose === true,
        [styles.tight]: loose === false,
      }, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default DisplayFont;
