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
  // avatarUrl: string;
  thumbnail: string;
  num_comments: number;
  url: string;
  score: number;
}
// sr_detail/public_description
// sr_detail/subscribers
// sr_detail/created
// sr_detail/display_name_prefixed
export const Card: FC<ICardProps> = ({title, author, thumbnail, num_comments, url, score}) =>  {
  return (
    <li className={styles.card}>
      <CardInfo />
      <Preview />
      <ButtonMenu />
      <Controls />
    </li>
  );
}
