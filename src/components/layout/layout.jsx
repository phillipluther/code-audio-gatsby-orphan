import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import PrimaryNav from '../primary-nav';
import Social from '../social';
import Container from '../container';
import Logo from './that-101-logo-badge.inline.svg';
import * as styles from './layout.module.css';
import '../global-styles.css';
import '@reach/dialog/styles.css';

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

  const [showMenu, openMenu] = React.useState(false);

  return (
    <>
      <header id="header" className={styles.header}>
        <Container className={styles.headerContent} large>
          <TitleTag className={styles.branding}>
            <Link to="/">
              <Logo className={styles.logo} aria-hidden="true" alt="" />
              <VisuallyHidden>{metadata.title}</VisuallyHidden>
            </Link>
          </TitleTag>

          <p className={styles.description}>{metadata.description}</p>

          <button
            type="button"
            className={styles.open}
            aria-controls="navMenu"
            aria-expanded={showMenu}
            onClick={() => openMenu(true)}
          >
            <span className={styles.toggle} />
            <VisuallyHidden>Open Navigation Menu</VisuallyHidden>
          </button>

          {showMenu && (
            <DialogOverlay className={styles.overlay}>
              <DialogContent
                aria-label="Navigation Menu"
                className={styles.dialog}
                id="navMenu"
              >
                <button
                  type="button"
                  className={styles.close}
                  aria-controls="navMenu"
                  aria-expanded={showMenu}
                  onClick={() => openMenu(false)}
                >
                  X
                  <VisuallyHidden>Close Navigation Menu</VisuallyHidden>
                </button>

                <PrimaryNav className={styles.headerNav} />
                <Social className={styles.headerSocial} />
              </DialogContent>
            </DialogOverlay>
          )}
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
