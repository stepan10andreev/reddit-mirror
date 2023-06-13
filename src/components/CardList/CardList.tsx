import { FC } from "react";
import styles from './CardList.module.scss';
import { Card } from "./Card/Card";
import { IHomePageProps } from "@/pages";

type ICardListsProps = Pick<IHomePageProps, 'postsData'>

export const CardList: FC<ICardListsProps> = ({ postsData }) =>  {
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
          key={post.id}
          title={post.title}
          url={post.url}
          thumbnail={post.thumbnail}
          permalink={post.permalink}
          author={post.author}
          score={post.score}
          num_comments={post.num_comments}
          created={post.created}
          media={post.media}
          id={post.id}
        />
      ))}
    </ul>
  );
}
