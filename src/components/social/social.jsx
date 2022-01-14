import * as React from 'react';
import classnames from 'classnames';
import { FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import VisuallyHidden from '@reach/visually-hidden';
import * as styles from './social.module.css';

export const socialLinks = [
  {
    href: 'https://twitter.com/phillipluther',
    label: '@phillipluther on Twitter',
    icon: FaTwitter,
  },
  {
    href: 'https://youtube.com/phillipluther',
    label: 'Code/Audio YouTube Channel',
    icon: FaYoutube,
  },
  {
    href: 'mailto:hello@code.audio',
    label: 'Email hello@code.audio',
    icon: FaEnvelope,
  },
];

const Social = ({ className, ...props }) => (
  <ul className={classnames(styles.list, className)}>
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <li key={href} className={styles.item}>
        <a href={href} className={styles.link}>
          <Icon aria-hidden="true" />
          <VisuallyHidden>{label}</VisuallyHidden>
        </a>
      </li>
    ))}
  </ul>
);

export default Social;
