import { FC } from 'react';
import styles from './UserBlock.module.scss';
import { Break } from '@/components/ui-components/Break/Break';
import { IconAnon } from '@/components/ui-components/Icon/Icons/AnonIcon';
import { EColor, Text } from '@/components/ui-components/Text/Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

const AUTH_URL = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`;

export const UserBlock: FC<IUserBlockProps> = ({ avatarSrc, username}) => {
  return (
    <a
      href={AUTH_URL}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} />
          : <IconAnon />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
