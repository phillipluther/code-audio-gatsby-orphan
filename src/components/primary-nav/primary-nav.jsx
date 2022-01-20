import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import DisplayFont from '../display-font';
import * as styles from './primary-nav.module.css';

export const primaryNavLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const PrimaryNav = ({ className, home = true, ...props }) => (
  <nav className={classnames(styles.wrapper, className)} {...props}>
    <ul className={styles.list}>
      {primaryNavLinks.map(({ href, label }) => {
        if ((home === false) && (href === '/')) {
          return null;
        }

        return (
          <DisplayFont as="li" size="xs" className={styles.item} key={href} light>
            <Link to={href} className={styles.link}>{label}</Link>
          </DisplayFont>
        );
      })}
    </ul>
  </nav>
);

export default PrimaryNav;
