import clsx from 'clsx'

import styles from '@site/src/pages/donate/internal/DonateSection/internal/Coffee/Coffee.module.css'
import { Tag } from '@site/src/components/Tag/Tag'
import { BUY_ME_A_COFFEE_LINK } from '@site/src/constants/donateLink'

type CoffeeProps = {
  className?: string
}

export function Coffee({ className }: CoffeeProps) {
  return (
    <a href={BUY_ME_A_COFFEE_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.card, className)}>
      <h3 className={styles.title}>Buy Me a Coffee</h3>

      <span className={styles.subtitle}>With one click you can:</span>

      <ul className={styles.content}>
        <li>
          make a one-time donation or subscribe to monthly support;
        </li>
        <li>
          buy merch in our shop – it's not only beautiful and cozy,
          but also helps spread human rights ideas.
          New items appear regularly — stay tuned!
        </li>
      </ul>

      <Tag className={styles.tag}>Open Buy Me a Coffee</Tag>
    </a>
  )
}
