import { FC } from 'react';
import styles from './SubredditInfoCard.module.scss';
import Image from 'next/image';
import { ISubredditData } from '@/pages/post/[id]';

interface ISubredditInfoCard {
  subredditData: ISubredditData,
  prefix: string,
}

export const  SubredditInfoCard: FC<ISubredditInfoCard> = ({subredditData, prefix}) => {
  const subredditUrl = "https://www.reddit.com" + subredditData.url;

  return (
    <div className={styles.subredditInfo}>
          <h3 className={styles.heading}>About Community</h3>
          {subredditData.banner_img && (
             <div className={styles.bannerImg}>
             <Image src={subredditData.banner_img} width={375} height={100} alt="subreddit_banner_image"/>
           </div>
          )}
          <div className={styles.subredditName}>
            {subredditData.icon_img && (
              <div className={styles.bannerImg}>
              <Image src={subredditData.icon_img} width={30} height={30} alt="subreddit_icon_image"/>
            </div>
            )}
            <h2 className={styles.subredditTitle}>{subredditData.title}</h2>
          </div>
          <small className={styles.prefix}>{prefix}</small>
          <p className={styles.subredditDescr}>{subredditData.public_description}</p>
          <p className={styles.subscribers}>Subscribers: {subredditData.subscribers}</p>
          <a href={subredditUrl} className={styles.subredditUrl}>LINK</a>
      </div>
  );
}
