import React, { useState, FC } from 'react';
import styles from './Title.module.scss';
import { Post } from '@/components/Post/Post';
import Link from 'next/link';

interface Props {
  title: string;
  permalink: string;
  id: string;
}


export const Title: FC<Props> = ({title, permalink, id}) => {
  // const [isModalOpened, setIsModalOpened] = useState(false);
  // const urlTitle = "https://www.reddit.com/" + permalink;
  // console.log(id)
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

