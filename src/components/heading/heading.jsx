import * as React from 'react';
import classnames from 'classnames';
import * as styles from './heading.module.css';

const Heading = ({
  as: HeadingTag = 'h2',
  children,
  className,
  unstyled = false,
  ...props
}) => {
  let headingClass;

  switch (!unstyled && HeadingTag) {
    case 'h1':
    case 'h2':
      headingClass = styles.xl;
      break;
    case 'h3':
      headingClass = styles.lg;
      break;
    case 'h4':
      headingClass = styles.md;
      break;
    case 'h5':
      headingClass = styles.sm;
      break;
    default:
      headingClass = styles.xm;
  }

  return (
    <HeadingTag className={classnames(styles.heading, headingClass, className)} {...props}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
