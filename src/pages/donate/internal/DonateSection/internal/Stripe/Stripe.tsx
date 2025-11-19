import clsx from 'clsx'

import Image from './assets/Image.png'

import styles from './Stripe.module.css'
import { Tag } from '@site/src/components/Tag/Tag'

type StripeProps = {
  className?: string
}

export function Stripe({ className }: StripeProps) {
  return (
    <a href="#" target='_blank' rel="noopener noreferrer" className={clsx(styles.card, className)}>
      <h3 className={styles.title}>Stripe</h3>
      <span className={styles.subtitle}>Хуткія і бяспечныя разавыя данаты любой сумы.</span>
      <img src={Image} alt="Stripe" className={styles.content} />
      <Tag className={styles.tag}>Падтрымаць праз Stripe</Tag>
    </a>
  )
}
