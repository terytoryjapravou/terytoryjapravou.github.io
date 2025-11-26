import clsx from 'clsx'

import IdealImage from '@theme/IdealImage';
import Image from '@site/src/pages/donate/internal/DonateSection/internal/Stripe/assets/Image.png'

import styles from '@site/src/pages/donate/internal/DonateSection/internal/Stripe/Stripe.module.css'
import { Tag } from '@site/src/components/Tag/Tag'
import { STRIPE_LINK } from '@site/src/constants/donateLink'

type StripeProps = {
  className?: string
}

export function Stripe({ className }: StripeProps) {
  return (
    <a href={STRIPE_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.card, className)}>
      <h3 className={styles.title}>Stripe</h3>
      <span className={styles.subtitle}>Fast and secure one-time donations of any amount.</span>
      <IdealImage img={Image} alt="Stripe" className={styles.content} />
      <Tag className={styles.tag}>Support via Stripe</Tag>
    </a>
  )
}
