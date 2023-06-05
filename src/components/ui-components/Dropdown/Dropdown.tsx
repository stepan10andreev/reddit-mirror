import React, { FC, useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export const Dropdown: FC<IDropdownProps> = ({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
