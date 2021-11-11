import Head from 'next/head';
import Link from 'next/link';
import VisuallyHidden from '../visually-hidden';
// import Logo from './dilettante-guru-logo.svg';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';

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
              {/* <Logo className={styles.logo} aria-hidden="true" /> */}
              <VisuallyHidden>The Dilettante Guru</VisuallyHidden>
            </a>
          </Link>
        </TitleTag>
      </header>

      <main>{children}</main>

      <footer>

      </footer>
    </div>
  );
}
