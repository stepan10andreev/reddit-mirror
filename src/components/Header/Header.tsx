import { FC, Suspense } from 'react';
import styles from './Header.module.scss';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';
import { SortBlock } from './SortBlock/SortBlock';


export const Header: FC = () => {
  return (
    <header className={styles.header}>


        <SearchBlock />

      <ThreadTitle />
      <SortBlock />
    </header>
  );
}

