import { PropsWithChildren, use, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './ActivityCardsGroup.module.css'
import clsx from 'clsx';

type ActivityCardsGroupProps = PropsWithChildren<{
  className?: string
}>

export const ActivityCardsGroup = ({ children, className }: ActivityCardsGroupProps) => {
  const childrenArray = Array.isArray(children) ? children : [children]

  const [cards, setCards] = useState(() =>
    childrenArray.map((child, idx) => ({ id: idx, content: child }))
  )

  const isSingleCard = !Array.isArray(children)

  useEffect(() => {
    const interval = setInterval(() => {

      setCards((prevCards) => {
        const [firstCard, ...rest] = prevCards
        return [...rest, firstCard]
      })

    }, 3 * 1000)

    return () => clearInterval(interval)
  }, [])

  if (isSingleCard) {
    return (
      <div className={clsx(styles.singleCard, className)}>
        {children}
      </div>
    )
  }

  return (
    <div className={clsx(styles.cardsGroup, className)}>
      <AnimatePresence mode="wait" initial={false}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={styles.card}
            style={{ '--idx': index } as React.CSSProperties}
            initial={false}
            animate={{
              left: index * 180,
              bottom: [
                null,
                index === cards.length - 1 ? index * -96 : null,
                index * 96,
              ],
              transition: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
            exit={{
              bottom: -100,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn"
              }
            }}
          >
            {card.content}
          </motion.div>
        )).reverse()}
      </AnimatePresence>
    </div>
  )
}
