import React, { useEffect, useRef, FC, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { useRouter } from "next/router";

interface IModal {
  onClose?: () => void;
  children: ReactNode;
}

export const Modal: FC<IModal> = ({onClose, children}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    ref.current = document.querySelector<HTMLDivElement>("#modal_root");

    setMounted(true);

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

  return (mounted && ref.current) ? createPortal(<div className={styles.modal}>{children}</div>, ref.current) : null
}


