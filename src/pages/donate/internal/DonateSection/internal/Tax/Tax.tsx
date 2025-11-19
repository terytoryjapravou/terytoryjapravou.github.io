import clsx from 'clsx'
import styles from './Tax.module.css'
import { Tag } from '@site/src/components/Tag/Tag'
import { Mark } from '@site/src/components/Mark/Mark'

type TaxProps = {
  className?: string
}

export function Tax({ className }: TaxProps) {
  return (
    <div className={clsx(styles.tax, className)}>
      <span className={styles.amount}>1,5%</span>
      <span className={styles.description}>Вашага падатку ў Польшчы на нашу дзейнасць</span>
      <span className={styles.details}>
        Кожная асоба, якая падае падатковую дэкларацыю ў Польшчы (PIT),
        можа перанакіраваць 1,5% свайго падатку на дабрачыннасць.
        Гэта не дадатковая плата, а частка ўжо налічанага падатку.
        І накіраваць гэты працэнт нашай арганізацыі «Terytoryja pravou»!
      </span>
      <span className={styles.note}>
        <Mark variant='handwritten' className={styles.noteTitle}>Важна!</Mark><br />
        Калі вы не выберыце нікога ў дэкларацыі, гэтыя сродкі будуць пералічаныя дзяржаве.
      </span>
      <span className={styles.instruction}>Усе крокі сабралі ў адной кароткай інструкцыі</span>
      <Tag href='#' className={styles.tag}>Глядзець інструкцыю</Tag>
    </div>
  )
}
