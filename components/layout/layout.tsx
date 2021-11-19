import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import classnames from 'classnames';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import { FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import VisuallyHidden from '../visually-hidden';
import Divider from '../divider';
import Logo from './dilettante-guru-logo.svg';
import utilStyles from '../../styles/utils.module.css';
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
    icon: FaTwitter,
  },
  {
    href: 'https://youtube.com/phillipluther',
    label: 'The Dilettante Guru YouTube Channel',
    icon: FaYoutube,
  },
  {
    href: 'mailto:hello@dilettante.guru',
    label: 'Email phil@dilettante.guru',
    icon: FaEnvelope,
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
    {socialLinks.map(({ icon: Icon, href, label }) => (
      <li key={href} className={styles.listItem}>
        <a href={href}>
          <VisuallyHidden>{label}</VisuallyHidden>
          <Icon aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

function getCopyrightDateString() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();

  return startYear === currentYear ? startYear.toString() : `${startYear}-${currentYear}`;
}

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
            <a className={styles.logoLink}>
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
              <SocialLinks className={styles.headerSocial} />
            </AnimatedDialogContent>
          </AnimatedDialogOverlay>
        ))}
      </header>

      <main>{children}</main>
      <Divider />

      <footer className={styles.footer}>
        <VisuallyHidden as="h2">Supplemental Information</VisuallyHidden>

        <section>
          <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>
          <NavLinks className={styles.footerNav} />
          <SocialLinks className={styles.footerSocial} />
        </section>

        <section className={utilStyles.fontSm}>
          <VisuallyHidden as="h3">Copyright Information and Disclaimers</VisuallyHidden>
          <p>
            All content on The Dilettante Guru is Copyright &copy;
            {` ${getCopyrightDateString()} `}
            by <a href="https://phillipluther.com">Phillip Luther</a> unless otherwise noted.
          </p>

          <p>
            All thoughts and opinions expressed on The Dilettante Guru and its connected
            social media profiles belong to me, Phillip Luther, and do not necessarily
            reflect the views or opinions of any associated organizations or corporate
            entities.
          </p>
        </section>
      </footer>
    </div>
  );
}
