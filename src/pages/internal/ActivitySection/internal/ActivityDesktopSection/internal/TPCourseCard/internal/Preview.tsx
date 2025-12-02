import styles from './Preview.module.css'
import Gramafon from './assets/gramafon.png'
import Image from '@theme/IdealImage';

export function Preview() {
  return (
    <>
      <div className={styles.preview}>
        <Image
          img={Gramafon}
          alt="Адукацыйны курс «Тэрыторыя правоў»"
          width={507}
          height={570}
          className={styles.image}
        />
      </div>

      <div className={styles.square} />
      <div className={styles.square2} />
    </>
  );
}
