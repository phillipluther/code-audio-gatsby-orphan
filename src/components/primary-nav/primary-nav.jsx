import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import * as styles from './primary-nav.module.css';

export const primaryNavLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/posts',
    label: 'All Posts',
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
          <li className={styles.item} key={href}>
            <Link to={href} className={styles.link}>{label}</Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default PrimaryNav;
