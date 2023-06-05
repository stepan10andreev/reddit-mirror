import { FC } from "react";
import styles from './CardInfo.module.scss';

export const CardInfo: FC = () => {
  return (
    <div className={styles.textContent}>
       <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src="https://i.ibb.co/SJkwNCH/avatar.jpg" alt="Avatar" />
            <a href="#user-url" className={styles.username}>Владимир Петров</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            5 часов назад
          </span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности
          </a>
        </h2>
    </div>
  );
}
