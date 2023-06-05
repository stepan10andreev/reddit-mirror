import { FC } from "react";
import styles from './CardList.module.scss';
import { Card } from "./Card/Card";

export const CardList: FC = () =>  {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
