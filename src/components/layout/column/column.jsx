import * as React from 'react';
import classnames from 'classnames';
import * as styles from './column.module.css';

const Column = ({
  aside = false,
  size,
  className,
  children,
  ...props
}) => {
  const ColumnTag = aside ? 'aside' : 'div';

  return (
    <ColumnTag
      className={classnames(styles.column, {
        [styles.oneThird]: size === '1-3',
        [styles.half]: size === '1-2',
        [styles.twoThirds]: size === '2-3',
      }, className)}
      {...props}
    >
      {children}
    </ColumnTag>
  );
};

export default Column;
