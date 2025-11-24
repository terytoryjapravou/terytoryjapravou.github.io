import React from 'react';
import Logo from '@theme/Logo';

import styles from './Logo.module.css';
import clsx from 'clsx';

export default function NavbarLogo(): JSX.Element {
  return (
    <Logo
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName={clsx('navbar__title', 'text--truncate', styles.title)}
    />
  );
}
