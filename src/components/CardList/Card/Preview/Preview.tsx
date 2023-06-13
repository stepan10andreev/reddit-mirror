import { FC } from 'react';
import styles from './Peview.module.scss';
import Image from 'next/image';

interface IPreviewProps {
  previewImgUrl: string;
  media: null | {};
}

export const Preview: FC<IPreviewProps> = ({previewImgUrl, media}) => {
  return (
    <div className={styles.preview}>
      {((media === null) && (previewImgUrl.includes('http'))) ? (
        <Image src={previewImgUrl} width={200} height={110} alt="preview image" style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
      ) : (
        <Image src='/media-1.jpg' width={200} height={110} alt="media-post" style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
      )}
    </div>
  );
}
