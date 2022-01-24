import * as React from 'react';
import classnames from 'classnames';
import * as styles from './display-font.module.css';

const DisplayFont = ({
  as: Tag = 'h2',
  children,
  className,
  light = false,
  size: userSize,
  loose = false,
  ...props
}) => {
  let size = userSize || null;

  if (!size) {
    switch (Tag) {
      case 'h1':
        size = 'xl';
        break;
      case 'h2':
        size = 'lg';
        break;
      case 'h3':
        size = 'md';
        break;
      case 'h4':
        size = 'sm';
        break;
      case 'h5':
      case 'h6':
        size = 'xs';
        break;
      default:
        size = 'inherit';
    }
  }

  return (
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
};

export default DisplayFont;
