import { FC, useState } from 'react';
import styles from './PostInfoCard.module.scss';
import Image from 'next/image';
import { IPostData } from '@/pages/post/[id]';

interface IPostInfoCard {
  postData: IPostData
}

export const  PostInfoCard: FC<IPostInfoCard> = ({postData}) => {
  const [imgError, setImgError] = useState(false)
  const postUrl = "https://www.reddit.com" + postData.permalink;
  return (
    <div className={styles.postInfo}>
      <h1 className={styles.title}>
        {postData.title}
      </h1>
      {postData.media != null && (
          <video className={styles.media} src={postData.media.reddit_video.scrubber_media_url} autoPlay></video>
      )}
      {(postData.thumbnail.includes('http') && !imgError) ? (
        <Image src={postData.thumbnail} width={200} height={110} alt="post image" onError={(e) => setImgError(true)}/>
      ) : (
        <div className={styles.infoMediaBlock}>See more on Reddit at the link below</div>
      )}
      {postData.selftext.length > 0 && (
        <p className={styles.description}>{postData.selftext}</p>
      )}
      <a href={postUrl} className={styles.link}>
        Link to this post on Reddit
      </a>
    </div>
  );
}
