import { Coffee } from './internal/Coffee/Coffee'

import style from './DonateSection.module.css'
import { Stripe } from './internal/Stripe/Stripe'
import { Tax } from './internal/Tax/Tax'
import { Personal } from './internal/Personal/Personal'

export function DonateSection() {
  return (
    < section className={style.section} >
      <div className={style.wrapper}>
        <Coffee className={style.coffee} />
        <Stripe className={style.stripe} />
        <Tax className={style.tax} />
        <Personal className={style.personal} />
      </div>
    </section >
  )
}
