import * as React from 'react';
import classnames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import { FaTwitter, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';
import VisuallyHidden from '@reach/visually-hidden';
import * as styles from './social.module.css';

const iconMap = {
  twitter: FaTwitter,
  youtube: FaYoutube,
  github: FaGithub,
  email: FaEnvelope,
};

const Social = ({ className, ...props }) => {
  const { site } = useStaticQuery(query);

  return (
    <ul className={classnames(styles.list, className)} {...props}>
      {site.siteMetadata.social.map(({ link, label, name }) => {
        const Icon = iconMap[name];
        const Label = Icon ? VisuallyHidden : 'span';

        return (
          <li key={name} className={styles.item}>
            <a href={link} className={styles.link}>
              {Icon && <Icon aria-hidden="true" />}
              <Label>{label}</Label>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;

const query = graphql`
  query Social {
    site {
      siteMetadata {
        siteName: name
        social {
          name
          link
          label
        }
      }
    }
  }
`;
