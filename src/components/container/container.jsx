import * as React from 'react';
import classnames from 'classnames';
import * as styles from './container.module.css';

const Container = ({
  className,
  children,
  noX,
  noY,
  noTop,
  noBottom,
  noRight,
  noLeft,
  large,
  as: Tag = 'div',
  ...props
}) => {
  // TODO: the not-this/not-that stuff reads oddly; use clearer logic
  const containerClasses = classnames(
    styles.container,
    {
      [styles.large]: large,
      [styles.top]: !noTop && !noY,
      [styles.bottom]: !noBottom && !noY,
      [styles.left]: !noLeft && !noX,
      [styles.right]: !noRight && !noX,
    },
    className,
  );

  return (
    <Tag className={containerClasses} {...props}>
      {children}
    </Tag>
  );
};

export default Container;
