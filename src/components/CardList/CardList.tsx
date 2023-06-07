import { FC } from "react";
import styles from './CardList.module.scss';
import { Card, ICardProps } from "./Card/Card";
import { IHomePageProps } from "@/pages";

interface ICardListsProps extends IHomePageProps {}

export const CardList: FC<ICardListsProps> = ({ postsData }) =>  {
  console.log(postsData)
  return (
    <ul className={styles.cardsList}>
      {postsData.length === 0 && (
        <div role='alert' style={{textAlign: 'center'}}>
          <p>Нет ни одного поста</p>
          <p>Для просмотра постов необходимо авторизоваться</p>
        </div>
      )}

      {postsData.map((post) => (
        <Card
          key={post.data.id}
          title={post.data.title}
          url={post.data.url}
          thumbnail={post.data.thumbnail}
          author={post.data.author}
          score={post.data.score}
          num_comments={post.data.num_comments}
          created={post.data.created}
        />
      ))}
    </ul>
  );
}
