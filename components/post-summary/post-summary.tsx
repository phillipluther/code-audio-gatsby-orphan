import Link from 'next/link';
import Image from 'next/image';
import Date from '../date';
import VisuallyHidden from '../visually-hidden';
import { PostMetadataProps } from '../../lib/posts';
import styles from './post-summary.module.css';

export type PostProps = PostMetadataProps & {
  titleTag?: string,
  children?: React.ReactNode,
};

export default function PostSummary({
  title,
  titleTag: TitleTag = 'h3',
  description,
  date,
  id: slug,
  image = '/images/dilettante-guru-card.jpg',
}: PostProps) {

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <TitleTag className={styles.title}>
          <Link href={`/posts/${slug}`}>
            <a>{title}</a>
          </Link>
        </TitleTag>

        <Date dateString={date} />

        <Image
          src={image}
          width="1200"
          height="630"
          layout="intrinsic"
          alt={description}
          aria-hidden="true"
        />
      </header>
      <p>{description}</p>

      <footer className={styles.footer}>
        <Link href={`/posts/${slug}`}>
          <a className={styles.link}>
            Read More
            <VisuallyHidden>: {title}</VisuallyHidden>
          </a>
        </Link>
      </footer>
    </article>
  );
}
