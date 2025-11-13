import { useWindowSize } from "@docusaurus/theme-common"
import { TagsGroup } from "@site/src/components/TagsGroup/TagsGroup"
import styles from "./TagsCard.module.css"

export const TagsCard = () => {
  const screenSize = useWindowSize()

  if (screenSize === 'mobile') return null

  return <TagsGroup blogId="articles" className={styles.tagsCard} />
}
