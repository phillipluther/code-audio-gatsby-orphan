import { parseISO, format } from 'date-fns';
import classnames from 'classnames';
import styles from './date.module.css';

export default function Date({ dateString, className }: {
  dateString: string,
  className?: string,
}) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={classnames(styles.date, className)}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}
