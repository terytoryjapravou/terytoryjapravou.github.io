import React, { JSX } from 'react';
import type {Props} from '@theme/Footer/Layout';
import { Sticker } from './Sticker/Sticker';

import styles from './Layout.module.css';

export default function FooterLayout({
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Sticker />
      <div className={styles.container}>
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  )
}
