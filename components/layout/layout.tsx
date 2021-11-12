import Head from 'next/head';
import Link from 'next/link';
import classnames from 'classnames';
import VisuallyHidden from '../visually-hidden';
import Logo from './dilettante-guru-logo.svg';
import styles from './layout.module.css';
// import utilStyles from '../../styles/utils.module.css';

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
    <ul>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
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
      <li key={href}>
        <a href={href}>{label}</a>
      </li>
    ))}
  </ul>
);

export default function Layout({ children, home }: {
  children: React.ReactNode,
  home?: boolean,
}) {
  const TitleTag = home ? 'h1' : 'p';

  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
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

        <NavLinks />
        <SocialLinks />
      </header>

      <main>{children}</main>

      <footer>

      </footer>
    </div>
  );
}
