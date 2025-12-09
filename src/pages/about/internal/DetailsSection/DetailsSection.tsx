import Details from "@site/src/theme/Details"
import styles from './DetailsSection.module.css'

export function DetailsSection() {
  return (
    <section>
      <div className={styles.wrapper}>

        <Details summary="Місія">
          Фармаванне і прасоўванне культуры правоў чалавека ў беларускім грамадстве, праз адукацыю і асвету, дзе кожн_ая ведае свае правы і падзяляе каштоўнасці чалавечай годнасці
        </Details>

        <Details summary="Мэта">
          Стварыць актыўную супольнасць, дзе кожн_ая падзяляе каштоўнасці чалавечай годнасці, ведае свае правы і гатовы абараняць іх
        </Details>

        <Details summary="Чым мы займаемся?">
          <ul className={styles.list}>
            <li className={styles.listItem}>Тлумачым правы чалавека простай мовай праз зразумелыя прыклады;</li>
            <li className={styles.listItem}>Падтрымліваем беларускую мову і культуру;</li>
            <li className={styles.listItem}>Арганізуем адукацыйныя праграмы, курсы і семінары;</li>
            <li className={styles.listItem}>Падтрымліваем актывіста_к, валанцёра_к і пачынаючых праваабаронцаў;</li>
            <li className={styles.listItem}>Распрацоўваем матэрыялы і ініцыятывы па папулярызацыі прававой культуры.</li>
          </ul>
        </Details>
      </div>
    </section>
  )
}
