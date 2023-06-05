import { FC } from "react";
import styles from './MenuItemList.module.scss';
import { Text } from '@/components/ui-components/Text/Text';
import { EIcons, Icon } from "@/components/ui-components/Icon/Icon";

export const MenuItemList: FC = () =>{
  return (
    <ul className={styles.menuItemsList}>

      <li className={styles.menuItem}>
        <Icon name={EIcons.comment}/>
        <Text size={14} mobileSize={12}>
          Комментарии
        </Text>
      </li>

      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <Icon name={EIcons.share}/>
        <Text size={14} mobileSize={12}>
          Поделиться
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.hide}/>
        <Text size={14} mobileSize={12}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.save}/>
        <Text size={14} mobileSize={12}>
        Сохранить
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.complain}/>
        <Text size={14} mobileSize={12}>
          Пожаловаться
        </Text>

      </li>
    </ul>
  );
}

