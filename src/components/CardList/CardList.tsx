import { FC } from "react";
import styles from './CardList.module.scss';
import { Card, ICardProps } from "./Card/Card";
import { IHomePageProps } from "@/pages";

interface ICardListsProps extends IHomePageProps {}

export const CardList: FC<ICardListsProps> = ({ postsData }) =>  {
  return (
    <ul className={styles.cardsList}>
      {postsData.length === 0 && (
         <div role='alert' style={{textAlign: 'center'}}>
         Нет ни одного поста
       </div>
      )}

      {postsData.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          url={post.url}
          author={post.author}
          thumbnail={post.thumbnail}
          score={post.score}
          num_comments={post.num_comments}
        />
      ))}
    </ul>
  );
}
