import SEO from '../components/seo';
import Layout from '../components/layout';
import PostListing from '../components/post-listing';
import { getSortedPostsData, PostMetadataProps } from '../lib/posts';
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

      <PostListing
        label="Blog"
        postsData={allPostsData}
      />
    </Layout>
  );
}
