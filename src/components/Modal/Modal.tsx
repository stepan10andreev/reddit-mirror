import React, { useEffect, useRef, FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './Post.module.scss';
import { useRouter } from "next/router";

interface IModal {
  onClose?: () => void;
  children: ReactNode;
}

export const Modal: FC<IModal> = ({onClose, children}) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        router.push('/')
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      {children}
    </div>
  ), node);
}
