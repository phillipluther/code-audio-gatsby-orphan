import Head from 'next/head';

export type SeoProps = {
  title: string,
  description: string,
  type?: string,
  url?: string,
  image?: string,
  children?: React.ReactNode,
};

export default function SEO({
  title,
  description,
  type = 'website',
  url = 'https://dilettante.guru',
  image = '/images/social-card.jpg',
  children,
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Phillip Luther" />

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content={description} />
      <meta name="twitter:creator" content="phillipluther" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {children}
    </Head>
  );
}
