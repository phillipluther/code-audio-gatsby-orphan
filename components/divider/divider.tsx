import classnames from 'classnames';
import DividerFlourish from './divider-flourish.svg';
import styles from './divider.module.css';

const Divider = ({ className, ...props }: { className?: string }) => (
  <DividerFlourish className={classnames(styles.divider, className)} />
);

export default Divider;
