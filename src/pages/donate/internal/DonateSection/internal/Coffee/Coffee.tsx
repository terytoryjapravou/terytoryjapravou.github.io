import clsx from 'clsx'

import styles from './Coffee.module.css'
import { Tag } from '@site/src/components/Tag/Tag'

type CoffeeProps = {
  className?: string
}

export function Coffee({ className }: CoffeeProps) {
  return (
    <a href="#" target='_blank' rel="noopener noreferrer" className={clsx(styles.card, className)}>
      <h3 className={styles.title}>Buy Me a Coffee</h3>

      <span className={styles.subtitle}>Адным клікам можна:</span>

      <ul className={styles.content}>
        <li>
          зрабіць разавы данат або падпісацца на штомесячную падтрымка;
        </li>
        <li>
          купіць мерч у нашым шопе – ён не толькі прыгожы і ўтульны,
          але і дапамагае распаўсюджваць ідэі правоў чалавека.
          Навінкі з’яўляюцца рэгулярна — сачыце!
        </li>
      </ul>

      <Tag className={styles.tag}>Адкрыць Buy Me a Coffee</Tag>
    </a>
  )
}
