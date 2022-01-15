import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import * as styles from './primary-nav.module.css';

const PrimaryNav = ({ className, home = true, ...props }) => {
  const navLinks = [
    {
      href: '/posts',
      label: 'Blog Posts',
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

  if (home) {
    navLinks.unshift({
      href: '/',
      label: 'Home',    
    });
  }

  return (
    <nav className={classnames(styles.wrapper, className)} {...props}>
      <ul className={styles.list}>
        {navLinks.map(({ href, label }) => (
          <li className={styles.item} key={href}>
            <Link to={href} className={styles.link}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PrimaryNav;
