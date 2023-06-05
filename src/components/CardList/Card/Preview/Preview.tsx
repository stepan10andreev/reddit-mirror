import { FC } from 'react';
import styles from './Peview.module.scss';

export const Preview: FC = () => {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://i.ibb.co/7j4gmDg/Rectangle-14.jpg" alt="previewImg" />
    </div>
  );
}
