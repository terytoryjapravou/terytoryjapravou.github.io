import styles from './EducationCardContent.module.css';
import IgLogo from './assets/igLogo.svg';
import TgLogo from './assets/tgLogo.svg';
import FbLogo from './assets/fbLogo.svg';

export const EducationCardContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <IgLogo />
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
        <TgLogo />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>Telegram</b><br/>
            магчымасці для тых, хто хоча вучыцца, развівацца і дзейнічаць:

            <ul className={styles.listContent}>
              <li className={styles.listItem}>курсы</li>
              <li className={styles.listItem}>стажыроўкі</li>
              <li className={styles.listItem}>падтрымка</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <FbLogo />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>У Facebook</b> — простай мовай пра складанае:
            матэрыялы пра правы чалавека, тлумачэнні, падборкі
          </div>
        </div>
      </div>
    </div>
  );
};
