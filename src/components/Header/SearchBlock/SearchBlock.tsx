import { FC, useEffect } from 'react';
import styles from './SearchBlock.module.scss';
import { UserBlock } from './UserBlock/UserBlock';
import axios from 'axios';
import { useAppSelector } from '@/components/Hooks/useApp';
import { useUserData } from '@/components/Hooks/useUserData';

export const SearchBlock: FC = () => {
  const userData = useUserData();

  return (
    <>
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={userData.iconImg} username={userData.name}/>
    </div>
    </>
  );
}
