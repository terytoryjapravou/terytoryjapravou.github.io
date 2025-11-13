import { Button } from "@site/src/components/Button/Button";
import styles from "./OpportunityFooter.module.css"

export function OpportunityFooter() {
  return (
    <footer className={styles.footer}>
      <Button href="/opportunities">Больш магчымасцей</Button>
    </footer>
  )
}
