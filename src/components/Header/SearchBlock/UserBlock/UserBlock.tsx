import { FC } from 'react';
import styles from './UserBlock.module.scss';
import { Break } from '@/components/ui-components/Break/Break';
import { IconAnon } from '@/components/ui-components/Icon/Icons/AnonIcon';
import { EColor, Text } from '@/components/ui-components/Text/Text';
import { useUserData } from '@/components/Hooks/useUserData';
import { BeatLoader } from 'react-spinners';
import { motion } from 'framer-motion';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

const AUTH_URL = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.NEXT_PUBLIC_API_URL}/auth&duration=permanent&scope=read identity`;

const imageStyle = {
  width: '100%',
  height: '100%',
  'object-fit': 'cover',
  'border-radius': '100%',
};

export const UserBlock: FC<IUserBlockProps> = ({ avatarSrc, username}) => {
  const { userData, isLoading, isAuth } = useUserData();

  return (
    <a
      href={AUTH_URL}
      className={styles.userBox}
    >
      {(!isAuth && !isLoading) && (
        <motion.div
          className={styles.authBlock}
          initial={{ opacity: 0, y: -500}}
          animate={{ opacity: 1, y: '-50%'}}
          transition={{ duration: 0.7}}
        >
          <span className={styles.authText}>Авторизуйтесь</span>
          <div className={styles.arrow}></div>
        </motion.div>
      )}
      <div className={styles.avatarBox}>
        {userData.iconImg
          // eslint-disable-next-line @next/next/no-img-element
          ?  <img src={userData.iconImg} alt='user avatar' className={styles.avatarImage} />

          : <IconAnon />
        }
      </div>
      <div className={styles.username}>
        <Break size={12} />
        {isLoading ? (
            <BeatLoader color="#CC6633" />
            // <Text size={20} color={EColor.gray99}>Загрузка...</Text>
        ) : (
            <Text size={20} color={username ? EColor.black : EColor.gray99}>{userData.name || 'Авторизоваться'}</Text>
        )}
      </div>
    </a>
  );
}
