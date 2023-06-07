import { FC } from 'react';
import styles from './Peview.module.scss';

interface IPreviewProps {
  previewImgUrl: string;
  media: null | {};
}

export const Preview: FC<IPreviewProps> = ({previewImgUrl, media}) => {
  console.log(media)
  return (
    <div className={styles.preview}>
      {media === null ? (
        <img className={styles.previewImg} src={previewImgUrl} alt="previewImg" />

      ) : (
        <img className={styles.previewImg} src='/media-1.jpg' alt="previewImg" />
        // <div className={styles.mediaPost}>
        //   Media Post
        // </div>
      )}
    </div>
  );
}
