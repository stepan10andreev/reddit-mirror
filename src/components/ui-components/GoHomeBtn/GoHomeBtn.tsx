import { FC } from "react"
import styles from './GoHomeBtn.module.scss';
import { useRouter } from "next/router";

export const GoHomeBtn: FC  = () => {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.push('/')}>
      Go Home
    </button>
  )
}

