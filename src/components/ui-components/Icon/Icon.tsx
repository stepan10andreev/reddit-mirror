import { FC } from 'react';
import styles from './Icon.module.scss';
import { CommentIcon } from './Icons/CommentIcon';
import { ShareIcon } from './Icons/ShareIcon';
import { HideIcon } from './Icons/HideIcon';
import { SaveIcon } from './Icons/SaveIcon';
import { ComplainIcon } from './Icons/ComplainIcon';

type TSizes = 18 | 16 | 14 | 12 | 10 | 8;

let iconList = {
  CommentIcon: <CommentIcon />,
  ShareIcon: <ShareIcon/>,
  HideIcon: <HideIcon />,
  SaveIcon: <SaveIcon />,
  ComplainIcon: <ComplainIcon />
};


export enum EIcons {
  comment = 'CommentIcon',
  share = `ShareIcon`,
  hide = `HideIcon`,
  save = `SaveIcon`,
  complain = `ComplainIcon`,
}

interface IIconProps {
  name: EIcons;
  size?: TSizes;
}

export const Icon: FC<IIconProps> = ({ name, size }) => {
  return (
    <div className={styles[`icon-${size}`]}>
      {iconList[name]}
    </div>
  );
}
