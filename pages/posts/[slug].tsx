import Image from 'next/image';
import classnames from 'classnames';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getPostPaths, getPostData } from '../../lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug as string);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }) {
  const imageSrc = postData.image || '/images/dilettante-guru-card.png';

  return (
    <Layout>
      <SEO title={postData.title} description={''} />
      <article>
        <header>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <Date className={utilStyles.lightText} dateString={postData.date} />
          <Image
            src={imageSrc}
            width="1280"
            height="720"
            layout="intrinsic"
            alt={postData.title}
            aria-hidden="true"
          />
        </header>

        <section
          className={utilStyles.textify}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        <footer />
      </article>
    </Layout>
  );
}
