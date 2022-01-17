import * as React from 'react';
import classnames from 'classnames';
import DisplayFont from '../display-font';
import { title } from './page-title.module.css';

const PageTitle = ({ as = 'h1', children, className, ...props }) => (
  <DisplayFont as={as} className={classnames(title, className)} {...props}>
    {children}
  </DisplayFont>
);

export default PageTitle;
