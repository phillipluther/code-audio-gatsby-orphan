import * as React from 'react';
import Helmet from 'react-helmet';

const Head = ({
  title,
  description,
  image = './that-101-default-social-card.png',
  url,
  keywords,
  children,
}) => (
  <Helmet title={title} titleTemplate="%s · [That] 101">
    <meta name="description" content={description} />
    <meta name="image" content={image} />

    {keywords && <meta name="keywords" content={keywords.join(', ')} />}

    {url && <meta property="og:url" content={url} />}
    {(article ? true : null) && <meta property="og:type" content="article" />}
    {title && <meta property="og:title" content={title} />}
    {description && (
      <meta property="og:description" content={description} />
    )}
    {image && <meta property="og:image" content={image} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="that101thing" />

    {title && <meta name="twitter:title" content={title} />}
    {description && (
      <meta name="twitter:description" content={description} />
    )}
    {image && <meta name="twitter:image" content={image} />}

    {children}
  </Helmet>
);

export default Head;
