import styles from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/EducationCard/internal/EducationCardContent/EducationCardContent.module.css';
import IgLogo from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/EducationCard/internal/EducationCardContent/assets/igLogo.svg';
import TgLogo from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/EducationCard/internal/EducationCardContent/assets/tgLogo.svg';
import FbLogo from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/EducationCard/internal/EducationCardContent/assets/fbLogo.svg';

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
            <li className={styles.listItem}>materials on human rights</li>
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

            <ul className={styles.listContent}>
              <li className={styles.listItem}>courses</li>
              <li className={styles.listItem}>internships</li>
              <li className={styles.listItem}>support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <FbLogo />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <b>On Facebook</b> — complex topics explained simply:
            materials on human rights, explanations, collections
          </div>
        </div>
      </div>
    </div>
  );
};
