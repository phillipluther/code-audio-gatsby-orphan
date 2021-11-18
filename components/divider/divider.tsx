import classnames from 'classnames';
import styles from './divider.module.css';

const Divider = ({ className, ...props }: { className?: string }) => (
  <hr
    className={classnames(styles.divider, className)}
    {...props}
  />
);

export default Divider;
