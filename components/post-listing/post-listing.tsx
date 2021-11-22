import classnames from 'classnames';
import PostSummary, { PostProps } from '../post-summary';
import styles from './post-listing.module.css';

export default function PostListing({
  className,
  label = 'All Posts',
  labelTag: LabelTag = 'h2',
  postsData = [],
}: {
  className: string,
  label: string,
  labelTag: keyof JSX.IntrinsicElements,
  postsData?: PostProps[],
}) {
  let summaryTitleTag;

  switch (LabelTag) {
    case 'h1':
      summaryTitleTag = 'h2';
      break;
    case 'h2':
      summaryTitleTag = 'h3';
      break;
    case 'h3':
      summaryTitleTag = 'h4';
      break;
    case 'h4':
      summaryTitleTag = 'h5';
      break;
  }
  
  return (
    <section className={classnames(styles.wrapper, className)}>
      <LabelTag className={styles.label}>{label}</LabelTag>

      <ul className={styles.list}>
        {postsData.map((postData) => (
          <li className={styles.item} key={postData.id}>
            <PostSummary titleTag={summaryTitleTag} {...postData} />
          </li>
        ))}
      </ul>
    </section>
  );
}
