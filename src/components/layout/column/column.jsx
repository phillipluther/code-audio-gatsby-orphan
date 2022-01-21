import * as React from 'react';
import classnames from 'classnames';
import * as styles from './column.module.css';

const Column = ({
  aside = false,
  size = 'md',
  className,
  children,
  ...props
}) => {
  const ColumnTag = aside ? 'aside' : 'div';

  return (
    <ColumnTag
      className={classnames(
        styles.column,
        {
          [styles.sm]: size === 'sm',
          [styles.md]: size === 'md',
          [styles.lg]: size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </ColumnTag>
  );
};

export default Column;
