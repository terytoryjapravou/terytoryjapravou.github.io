import clsx from "clsx"
import { MAIL_ADDRESS, MAIL_LINK } from "@site/src/constants/socialLinks"
import styles from './Personal.module.css'
import { Mark } from "@site/src/components/Mark/Mark"

type PersonalProps = {
  className?: string
}

export function Personal({ className }: PersonalProps) {
  return (
    <div className={clsx(styles.personal, className)}>
      <span className={styles.title}>
        Хочаце зрабіць асабісты данат?
      </span>
      <span>Напішыце нам — мы вышлем рэквізіты, дамову дарэння або пацвярджэнне для бухгалтэрыі.</span>
      <a href={`mailto:${MAIL_LINK}`} className={styles.link}>
        <Mark variant="underline">
          Email: {MAIL_ADDRESS}
        </Mark>
      </a>
    </div>
  )
}
