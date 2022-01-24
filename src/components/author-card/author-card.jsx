import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import DisplayFont from '../display-font';
import Container from '../container';
import Social from '../social';
import * as styles from './author-card.module.css';

const AuthorCard = ({
  as,
  className,
  embedded = false,
  children,
  ...props
}) => {
  const { site: { siteMetadata: metadata }} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  const titleSize = embedded ? 'md' : 'xs';

  return (
    <Container
      noX={embedded ? true : false}
      noY={embedded ? true : false}
      className={classnames({
        [styles.wrapper]: embedded === false,
        [styles.embedded]: embedded,
       }, className)}
      {...props}
    >
      <DisplayFont as="h2" size={titleSize} className={styles.title}>About the Author</DisplayFont>

      <StaticImage
        src="./portrait-avatar.png"
        alt={`Phillip Luther, author of ${metadata.name}`}
        placeholder="blurred"
        className={styles.image}
      />
      <p>My name is Phillip Luther. I go by Phil.</p>
      <p>
        I'm a <a href="#life_long_clarification">life-long</a><sup>*</sup> software engineer and classicially trained musician. I'm also the sole author behind posts here on {metadata.name} exploring where the fields of music and code overlap.
      </p>
      <p>
        Current areas of interest include the web audio API, blockchain technology, and YouTube guitar channels. Ask me about 'em!
      </p>

      {children}

      <DisplayFont size="xs" as="h3" className={styles.subhead}>
        Connect With Me:
      </DisplayFont>
      <Social className={styles.social} />

      <p className={styles.small} id="life_long_clarification">
        <span>*</span>
        <span>
          I'm just over 40. Accounting for childhood and teenage buffoonery I'll translate "life long" to 25'ish years. For clarity.
        </span>
      </p>
    </Container>
  );
};

export default AuthorCard;
