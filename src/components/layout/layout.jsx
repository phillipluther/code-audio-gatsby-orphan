import * as React from 'react';
import { Link } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import PrimaryNav from '../primary-nav';
import Social from '../social';
import Logo from './that-101-logo-badge.inline.svg';
import * as styles from './layout.module.css';
import '../global-styles.css';

const Layout = ({
  children,
  isHome = false
}) => {
  const TitleTag = isHome ? 'h1' : 'p';

  return (
    <>
      <header id="header" className={styles.header}>
        <TitleTag>
          <Link to="/">
            <Logo className={styles.logo} aria-hidden="true" alt="" />
            <VisuallyHidden>That 101 | Home</VisuallyHidden>
          </Link>
        </TitleTag>

        <PrimaryNav className={styles.headerNav} />
        <Social className={styles.headerSocial} />
      </header>

      <main>{children}</main>

      <footer id="footer">
        <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

        <section id="footerNav">
          <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>
          <PrimaryNav className={styles.footerNav} />
          <Social className={styles.footerSocial} />
        </section>
      </footer>
    </>
  );
};

export default Layout;
