import React, { useState, FC } from 'react';
import styles from './Title.module.scss';
import Link from 'next/link';

interface Props {
  title: string;
  permalink: string;
  id: string;
}

// можно открыть модальное окно здесь, но тогда потеряется SSR засчет того что компонент станет клиентским (испльзование хуков)
// поэтому перенаправляем на страницу с информацией о посте, где уже есть функция открытия модального окна

export const Title: FC<Props> = ({title, permalink, id}) => {
  // const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title} >
          <Link href={`/post/${id}`} className={styles.postLink}>
            {title}
          </Link>

          {/* {isModalOpened && (
            <Post />
          )} */}
    </h2>
  );
}

