import * as React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import VisuallyHidden from '@reach/visually-hidden';
import * as styles from './social.module.css';

export const socialLinks = [
  {
    href: 'https://twitter.com/that101thing',
    label: '@That101Thing on Twitter',
    icon: FaTwitter,
  },
  {
    href: 'https://youtube.com/phillipluther',
    label: 'That 101 YouTube Channel',
    icon: FaYoutube,
  },
  {
    href: 'mailto:hello@oneoh.one',
    label: 'Email hello@oneoh.one',
    icon: FaEnvelope,
  },
];

const Social = ({ className, ...props }) => (
  <ul className={classnames(styles.list, className)}>
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <li key={href} className={styles.item}>
        <Link to={href} className={styles.link}>
          <Icon aria-hidden="true" />
          <VisuallyHidden>{label}</VisuallyHidden>
        </Link>
      </li>
    ))}
  </ul>
);

export default Social;
