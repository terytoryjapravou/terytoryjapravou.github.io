import clsx from "clsx"
import { MAIL_ADDRESS, MAIL_LINK } from "@site/src/constants/socialLinks"
import styles from '@site/src/pages/donate/internal/DonateSection/internal/Personal/Personal.module.css'
import { Mark } from "@site/src/components/Mark/Mark"

type PersonalProps = {
  className?: string
}

export function Personal({ className }: PersonalProps) {
  return (
    <div className={clsx(styles.personal, className)}>
      <span className={styles.title}>
        Want to make a personal donation?
      </span>
      <span>Write to us — we'll send you the details, donation agreement, or confirmation for accounting.</span>
      <a href={`mailto:${MAIL_LINK}`} className={styles.link}>
        <Mark variant="underline">
          Email: {MAIL_ADDRESS}
        </Mark>
      </a>
    </div>
  )
}
