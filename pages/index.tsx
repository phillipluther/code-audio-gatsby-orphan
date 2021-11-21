import Link from 'next/link';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PostSummary from '../components/post-summary';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, PostMetadataProps } from '../lib/posts';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

export default function Home({ allPostsData }: {
  allPostsData: PostMetadataProps[],
}) {
  return (
    <Layout home>
      <SEO
        title="The Dilettante Guru | Shallowly Exploring Deep Things"
        description="Covering a variety of topics from music theory to cryptocurrency to pop culture and video games"
      />

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((postData) => (
            <li className={utilStyles.listItem} key={postData.id}>
              <PostSummary {...postData} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
