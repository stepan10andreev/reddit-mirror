import { FC, useEffect, useState } from "react";
import styles from './CardInfo.module.scss';
import { getDate } from "@/utils/getDate";
import { Title } from "./Title/Title";

interface ICardInfoProps {
  title: string;
  author: string;
  permalink: string;
  createdMS: number;
  id: string;
}

export const CardInfo: FC<ICardInfoProps> = ({title, author, permalink, createdMS, id}) => {
  const[createdTime, setCreatedTime] = useState('');

  useEffect(() => {
    setCreatedTime(getDate(createdMS))
  }, [createdMS])

  return (
    <div className={styles.textContent}>
       <div className={styles.metaData}>
          <div className={styles.userLink}>
            Автор: <a href="#user-url" className={styles.username}> {author ? author : 'Автор неизвестен'}</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
              {createdTime}
          </span>
        </div>
        <Title title={title} permalink={permalink} id={id} />
    </div>
  );
}
