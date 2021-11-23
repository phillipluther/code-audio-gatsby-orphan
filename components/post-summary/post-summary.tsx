import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import Date from '../date';
import VisuallyHidden from '../visually-hidden';
import { PostMetadataProps } from '../../lib/posts';
import styles from './post-summary.module.css';
import utilStyles from '../../styles/utils.module.css';

export type PostProps = PostMetadataProps & {
  titleTag?: keyof JSX.IntrinsicElements,
  children?: React.ReactNode,
};

export default function PostSummary({
  title,
  titleTag: TitleTag = 'h3',
  description,
  date,
  id: slug,
  image = '/images/dilettante-guru-card.png',
  children,
}: PostProps) {
  const postUrl = `/posts/${slug}`;

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <TitleTag className={classnames(styles.title, utilStyles.fontMd, utilStyles.displayFont)}>
          <Link href={postUrl}>
            <a tabIndex={-1}>
              {title}
            </a>
          </Link>
        </TitleTag>

        <Date dateString={date} className={styles.date} />

        <Link href={postUrl}>
          <a tabIndex={-1}>
            <Image
              className={styles.image}
              src={image}
              width="1200"
              height="630"
              layout="intrinsic"
              alt={title}
              aria-hidden="true"
            />
          </a>
        </Link>
      </header>

      <p>{description}</p>

      {children}

      <footer className={styles.footer}>
        <Link href={postUrl}>
          <a className={styles.link}>
            Read More
            <VisuallyHidden>: {title}</VisuallyHidden>
          </a>
        </Link>
      </footer>
    </article>
  );
}
