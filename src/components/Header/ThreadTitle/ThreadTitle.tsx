import { FC } from 'react';
import styles from './ThreadTitle.module.scss';

export const  ThreadTitle: FC = () => {
  return (
    <h1 className={styles.threadTitle}>Личный кабинет</h1>
  );
}
