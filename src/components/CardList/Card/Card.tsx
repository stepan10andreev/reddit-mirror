import { FC } from "react";
import styles from './Card.module.scss';
import { CardInfo } from "./CardInfo/CardInfo";
import { Preview } from "./Preview/Preview";
import { ButtonMenu } from "./ButtonMenu/ButtonMenu";
import { Controls } from "./Controls/Controls";

export interface ICardProps {
  id?: string;
  title: string;
  author: string;
  num_comments: number;
  url: string;
  score: number;
  created: number;
  thumbnail: string;
}
// sr_detail/public_description
// sr_detail/subscribers
// sr_detail/created
// sr_detail/display_name_prefixed
// media/scrubber_media_url
export const Card: FC<ICardProps> = ({title, author, num_comments, url, score, created, thumbnail}) =>  {
  return (
    <li className={styles.card}>
      <CardInfo title={title} author={author} postLink={url} createdMS={created}/>
      <Preview previewImgUrl={thumbnail} />
      <ButtonMenu />
      <Controls score={score} commentsCount={num_comments}/>
    </li>
  );
}
