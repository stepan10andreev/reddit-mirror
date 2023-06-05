import { FC } from 'react';
import styles from './ButtonMenu.module.scss';
import { MenuIcon } from '@/components/ui-components/Icon/Icons/MenuIcon';
import { Dropdown } from '@/components/ui-components/Dropdown/Dropdown';
import { MenuItemList } from './MenuItemList/MenuItemList';
import { Text } from '@/components/ui-components/Text/Text';

export const ButtonMenu: FC = () => {

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemList />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>

  );
}
