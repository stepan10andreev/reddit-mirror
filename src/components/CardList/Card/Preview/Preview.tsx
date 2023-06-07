import { FC } from 'react';
import styles from './Peview.module.scss';

interface IPreviewProps {
  previewImgUrl: string;
}

export const Preview: FC<IPreviewProps> = ({previewImgUrl}) => {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={previewImgUrl} alt="previewImg" />
    </div>
  );
}
