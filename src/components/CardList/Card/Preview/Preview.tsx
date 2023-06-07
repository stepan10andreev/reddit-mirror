import { FC } from 'react';
import styles from './Peview.module.scss';
import Image from 'next/image';

interface IPreviewProps {
  previewImgUrl: string;
  media: null | {};
}

const imageStyle = {
  width: '100%',
  height: '100%',
  "object-fit": 'cover',
};

export const Preview: FC<IPreviewProps> = ({previewImgUrl, media}) => {
  console.log(media)
  return (
    <div className={styles.preview}>
      {((media === null) && (previewImgUrl != 'default')) ? (
        <Image src={previewImgUrl} width={200} height={110} alt="preview image" style={imageStyle}/>
      ) : (
        <Image src='/media-1.jpg' width={200} height={110} alt="media-post" style={imageStyle}/>
      )}
    </div>
  );
}
