import clsx from 'clsx'
import styles from '@site/src/pages/donate/internal/DonateSection/internal/Tax/Tax.module.css'
import { Tag } from '@site/src/components/Tag/Tag'
import { Mark } from '@site/src/components/Mark/Mark'

type TaxProps = {
  className?: string
}

export function Tax({ className }: TaxProps) {
  return (
    <div className={clsx(styles.tax, className)}>
      <span className={styles.amount}>1.5%</span>
      <span className={styles.description}>Of your tax in Poland to support our work</span>
      <span className={styles.details}>
        Every person who files a tax return in Poland (PIT)
        can redirect 1.5% of their tax to charity.
        This is not an additional payment, but part of the already calculated tax.
        You can direct this percentage to our organization "Terytoryja pravou"!
      </span>
      <span className={styles.note}>
        <Mark variant='handwritten' className={styles.noteTitle}>Important!</Mark><br />
        If you don't choose anyone in your declaration, these funds will go to the state.
      </span>
      <span className={styles.instruction}>We've gathered all the steps in one short instruction</span>
      <Tag href='#' className={styles.tag}>View instructions</Tag>
    </div>
  )
}
