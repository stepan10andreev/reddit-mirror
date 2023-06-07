import { FC } from "react";
import styles from './CardInfo.module.scss';
import { getDate } from "@/utils/getDate";

interface ICardInfoProps {
  title: string;
  author: string;
  postLink: string;
  createdMS: number;
}


export const CardInfo: FC<ICardInfoProps> = ({title, author, postLink, createdMS}) => {
  // console.log(createdMS)

  return (
    <div className={styles.textContent}>
       <div className={styles.metaData}>
          <div className={styles.userLink}>
            Автор: <a href="#user-url" className={styles.username}> {author ? author : 'Автор неизвестен'}</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
              {getDate(createdMS)}
          </span>
        </div>
        <h2 className={styles.title}>
          <a href={postLink} className={styles.postLink}>
            {title}
          </a>
        </h2>
    </div>
  );
}
