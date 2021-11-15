import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import classnames from 'classnames';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import VisuallyHidden from '../visually-hidden';
import Logo from './dilettante-guru-logo.svg';
import styles from './layout.module.css';

const navLinks = [
  {
    href: '/',
    label: 'Home',
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

const socialLinks = [
  {
    href: 'https://twitter.com/DilettanteGuru',
    label: '@DilettanteGuru on Twitter',
  },
];

const NavLinks = ({ className }: {
  className?: string,
}) => (
  <nav className={classnames(styles.nav, className)}>
    <ul className={styles.navList}>
      {navLinks.map(({ href, label }) => (
        <li key={href} className={styles.listItem}>
          <Link href={href}>
            <a>
              {label}
              <VisuallyHidden>{' '}The Dilettante Guru</VisuallyHidden>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const SocialLinks = ({ className }: {
  className?: string,
}) => (
  <ul className={classnames(styles.social, className)}>
    {socialLinks.map(({ href, label }) => (
      <li key={href} className={styles.listItem}>
        <a href={href}>{label}</a>
      </li>
    ))}
  </ul>
);

export default function Layout({ children, home }: {
  children: React.ReactNode,
  home?: boolean,
}) {
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  const TitleTag = home ? 'h1' : 'p';
  const [isMenuOpen, showMenu] = useState(false);

  const transitions = useTransition(isMenuOpen, {
    from: {
      opacity: 0,
      x: 100,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
    leave: {
      opacity: 0,
      x: 100,
    },
  });

  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className={styles.header}>
        <TitleTag className={styles.title}>
          <Link href="/">
            <a>
              <Logo
                className={styles.logo}
                aria-hidden="true"
              />
              <VisuallyHidden>The Dilettante Guru</VisuallyHidden>
            </a>
          </Link>
        </TitleTag>

        <button
          className={styles.toggle}
          type="button"
          onClick={() => showMenu(true)}
        >
          <span className={styles.hamburger} aria-hidden="true" />
          <VisuallyHidden>Open Navigation Menu</VisuallyHidden>
        </button>

        {transitions((transitionStyles, item) => item && (
          <AnimatedDialogOverlay
            className={styles.overlay}
            isOpen={isMenuOpen}
            onDismiss={() => showMenu(false)}
            style={{ opacity: transitionStyles.opacity }}
          >
            <AnimatedDialogContent
              className={styles.menu}
              aria-label="Navigation Menu"
              style={{
                transform: transitionStyles.x.to((val) => `translate3d(${val}%, 0, 0)`)
              }}
            >
              <button className={styles.toggle} onClick={() => showMenu(false)}>
                <VisuallyHidden>Close Navigation Menu</VisuallyHidden>
                <span className={styles.close} aria-hidden="true" />
              </button>

              <NavLinks />
              <SocialLinks />
            </AnimatedDialogContent>
          </AnimatedDialogOverlay>
        ))}
      </header>

      <main>{children}</main>

      <footer>
        <VisuallyHidden as="h2">Supplemental Information</VisuallyHidden>

        <section>
          <VisuallyHidden as="h3">Navigation</VisuallyHidden>
          <NavLinks />
          <SocialLinks />
        </section>
      </footer>
    </div>
  );
}
