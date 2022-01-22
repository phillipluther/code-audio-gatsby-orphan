import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import DisplayFont from '../display-font';
import * as styles from './contact-info.module.css';

const ContactInfo = ({ className, ...props }) => {
  const { site: { siteMetadata: metadata }} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            name
            contact
            link
          }
        }
      }
    }
  `);
  
  const contactLinks = metadata.social.filter(({ name }) => ['email', 'twitter'].includes(name));
  return (
    <ul className={classnames(styles.wrapper, className)} {...props}>
      {contactLinks.map(({ name, contact, link }) => (
        <li className={styles.item} key={name}>
          <DisplayFont
            as="span"
            className={styles.title}
          >
            {name}:
          </DisplayFont>
          {' '}
          <a href={link} className={styles.link}>
            {contact}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;
