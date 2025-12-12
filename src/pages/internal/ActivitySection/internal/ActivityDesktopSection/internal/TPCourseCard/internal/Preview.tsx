import styles from './Preview.module.css'
import Gramafon from './assets/gramafon.png'
import Image from '@theme/IdealImage';

export function Preview() {
  return (
    <>
      <div className={styles.preview}>
        <div className={styles.image} >
          <Image
            img={Gramafon}
            alt="Адукацыйны курс «Тэрыторыя правоў»"
            width={507}
            height={570}
          />
        </div>
      </div>

      <div className={styles.square} />
      <div className={styles.square2} />
    </>
  );
}
