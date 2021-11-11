import classnames from 'classnames';
import styles from './visually-hidden.module.css';

export default function VisuallyHidden({
  as: VisuallyHiddenTag = 'span',
  className,
  children,
  ...props
}: {
  as?: string,
  className?: string,
  children: React.ReactNode
}) {
  const visuallyHiddenClasses = classnames(styles.wrapper, className);

  return (
    <VisuallyHiddenTag className={visuallyHiddenClasses} {...props}>
      {children}
    </VisuallyHiddenTag>
  );
}
