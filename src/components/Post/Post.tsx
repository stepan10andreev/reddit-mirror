import React, { useEffect, useRef, FC } from 'react';
import ReactDOM from 'react-dom';
import styles from './Post.module.scss';
import { useRouter } from "next/router";

interface IPost {
  onClose?: () => void;
}

export const Post: FC<IPost> = (props) => {
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
      <h2>
        Следует отметить, что новая модель организационной деятельности поможет
      </h2>
      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p></p>
        <p></p>
      </div>
    </div>
  ), node);
}
