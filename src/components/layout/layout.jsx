import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import PrimaryNav from '../primary-nav';
import Social from '../social';
import Container from '../container';
import Logo from './that-101-logo-badge.inline.svg';
import * as styles from './layout.module.css';
import '../global-styles.css';

const Layout = ({
  children,
  isHome = false
}) => {
  const TitleTag = isHome ? 'h1' : 'p';
  const { site: { siteMetadata: metadata }} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  return (
    <>
      <header id="header" className={styles.header}>
        <Container large>
          <TitleTag>
            <Link to="/">
              <Logo className={styles.logo} aria-hidden="true" alt="" />
              <VisuallyHidden>{metadata.title}</VisuallyHidden>
            </Link>
          </TitleTag>

          <p className={styles.description}>{metadata.description}</p>

          <PrimaryNav className={styles.headerNav} />
          <Social className={styles.headerSocial} />
        </Container>
      </header>

      <main>{children}</main>

      <footer id="footer" className={styles.footer}>
        <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

        <Container as="section" id="footerNav">
          <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>
          <PrimaryNav className={styles.footerNav} />
          <Social className={styles.footerSocial} />
        </Container>
      </footer>
    </>
  );
};

export default Layout;
