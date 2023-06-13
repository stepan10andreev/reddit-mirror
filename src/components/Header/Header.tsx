import { FC } from 'react';
import styles from './Header.module.scss';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';


export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      {/* <SortBlock /> */}
    </header>
  );
}

