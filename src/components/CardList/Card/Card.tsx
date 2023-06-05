import { FC } from "react";
import styles from './Card.module.scss';
import { CardInfo } from "./CardInfo/CardInfo";
import { Preview } from "./Preview/Preview";
import { ButtonMenu } from "./ButtonMenu/ButtonMenu";
import { Controls } from "./Controls/Controls";

export const Card: FC = () =>  {
  return (
    <li className={styles.card}>
      <CardInfo />
      <Preview />
      <ButtonMenu />
      <Controls />
    </li>
  );
}
