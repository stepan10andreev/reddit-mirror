import { FC } from "react";
import styles from './Card.module.scss';
import { CardInfo } from "./CardInfo/CardInfo";
import { Preview } from "./Preview/Preview";
import { ButtonMenu } from "./ButtonMenu/ButtonMenu";
import { Controls } from "./Controls/Controls";

export interface ICardProps {
  id: string;
  title: string;
  author: string;
  num_comments: number;
  permalink: string;
  url: string;
  score: number;
  created: number;
  thumbnail: string;
  media: null | {};
}

export const Card: FC<ICardProps> = ({title, author, num_comments, permalink, score, created, thumbnail, media, id}) =>  {
  return (
    <li className={styles.card}>
      <CardInfo title={title} author={author} permalink={permalink} createdMS={created} id={id}/>
      <Preview previewImgUrl={thumbnail} media={media}/>
      <ButtonMenu />
      <Controls score={score} commentsCount={num_comments}/>
    </li>
  );
}
