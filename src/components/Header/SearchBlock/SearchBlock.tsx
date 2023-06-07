import { FC } from 'react';
import styles from './SearchBlock.module.scss';
import { UserBlock } from './UserBlock/UserBlock';


export const SearchBlock: FC = () => {
  return (
    <>
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
    </>
  );
}
