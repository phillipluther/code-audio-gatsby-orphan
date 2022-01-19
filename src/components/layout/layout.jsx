import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import PrimaryNav from '../primary-nav';
import Social from '../social';
import Container from '../container';
import Logo from './code-audio-logo-sticker-reverse.inline.svg';
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

  return (
    <>
      <header id="header" className={styles.header}>
        <Container className={styles.headerContent} large>
          <TitleTag className={styles.branding}>
            <Link to="/" className={styles.logoLink}>
              <Logo className={styles.logo} aria-hidden="true" alt="" />
              <VisuallyHidden>{metadata.title}</VisuallyHidden>
            </Link>
          </TitleTag>

          <PrimaryNav className={styles.headerNav} home={false} />
        </Container>
      </header>

      <main>{children}</main>

      <footer id="footer" className={styles.footer}>
        <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

        <Container as="section" id="footerNav" className={styles.footerMenu}>
          <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>
          <PrimaryNav className={styles.footerNav} />
          <Social />
        </Container>

        <Container as="section" id="footerDisclaimers">
          <VisuallyHidden as="h3">Copyright Info and Disclaimers</VisuallyHidden>
          <p>
            The opinions and viewpoints expressed in any format of{' '}
            <a href="https://code.audio">Code/Audio</a>{' '}
            belong to me, Phillip Luther, and do not necessarily reflect the views or opinions
            of any associated organizations or corporate entities.
          </p>
          <p>
            All <a href="https://code.audio">Code/Audio</a> content is Copyright &copy; 2022
            by Phillip Luther unless otherwise specified.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
