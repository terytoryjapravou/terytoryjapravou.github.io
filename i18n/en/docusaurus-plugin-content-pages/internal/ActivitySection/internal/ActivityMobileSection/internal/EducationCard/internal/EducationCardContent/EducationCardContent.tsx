import styles from '@site/src/pages/internal/ActivitySection/internal/ActivityMobileSection/internal/EducationCard/internal/EducationCardContent/EducationCardContent.module.css';
import IgLogo from '@site/src/pages/internal/ActivitySection/internal/ActivityMobileSection/internal/EducationCard/internal/EducationCardContent/assets/igLogo.svg';
import TgLogo from '@site/src/pages/internal/ActivitySection/internal/ActivityMobileSection/internal/EducationCard/internal/EducationCardContent/assets/tgLogo.svg';
import FbLogo from '@site/src/pages/internal/ActivitySection/internal/ActivityMobileSection/internal/EducationCard/internal/EducationCardContent/assets/fbLogo.svg';

export const EducationCardContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <IgLogo />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>On our Instagram</b> —
            complex topics explained simply:
          </div>

          <ul className={styles.listContent}>
            <li className={styles.listItem}>human rights materials</li>
            <li className={styles.listItem}>explanations</li>
            <li className={styles.listItem}>collections</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <TgLogo />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>Telegram</b><br />
            opportunities for those who want to learn, develop and act:
          </div>

          <ul className={styles.listContent}>
            <li className={styles.listItem}>courses</li>
            <li className={styles.listItem}>internships</li>
            <li className={styles.listItem}>support</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <FbLogo />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>On Facebook</b> — deepen your knowledge of human rights:
          </div>

          <ul className={styles.listContent}>
            <li className={styles.listItem}>articles</li>
            <li className={styles.listItem}>educational materials</li>
            <li className={styles.listItem}>useful collections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
