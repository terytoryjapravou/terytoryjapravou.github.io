import styles from './EducationCardContent.module.css';
import IgLogo from './assets/igLogo.svg';
import TgLogo from './assets/tgLogo.svg';
import FbLogo from './assets/fbLogo.svg';

export const EducationCardContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <IgLogo className={styles.logo} />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>У нашым Instagram</b> —
            простай мовай пра складанае:
          </div>

          <ul className={styles.listContent}>
            <li className={styles.listItem}>матэрыялы пра правы чалавека</li>
            <li className={styles.listItem}>тлумачэнні</li>
            <li className={styles.listItem}>падборкі</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <TgLogo className={styles.logo} />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>Telegram</b><br />
            магчымасці для тых, хто хоча вучыцца, развівацца і дзейнічаць:
          </div>

          <ul className={styles.listContent}>
            <li className={styles.listItem}>курсы</li>
            <li className={styles.listItem}>стажыроўкі</li>
            <li className={styles.listItem}>падтрымка</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <FbLogo className={styles.logo} />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>У Facebook</b> — паглыбляем вашыя веды пра правы чалавека:
          </div>

          <ul className={styles.listContent}>
            <li className={styles.listItem}>артыкулы</li>
            <li className={styles.listItem}>адукацыйныя матэрыялы</li>
            <li className={styles.listItem}>карысныя падборкі</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
