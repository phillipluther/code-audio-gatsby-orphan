import classnames from 'classnames';
import DividerFlourish from './divider-flourish.svg';
import styles from './divider.module.css';
import utilStyles from '../../styles/utils.module.css';

const Divider = ({ className, ...props }: { className?: string }) => (
  <>
    <hr className={styles.breaker} />
    <DividerFlourish
      className={classnames(styles.divider, utilStyles.spaceY, className)}
      aria-hidden="true"
      alt=""
    />
  </>
);

export default Divider;
