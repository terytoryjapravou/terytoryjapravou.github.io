import React, { JSX } from 'react'
import clsx from 'clsx'
import {Details as DetailsGeneric} from '@docusaurus/theme-common/Details'
import type {Props} from '@theme/Details'

import styles from './Details.module.css'

export default function Details(props: Props): JSX.Element {
  return (
    <DetailsGeneric
      {...props}
      className={clsx(styles.details, props.className)}
    />
  )
}
