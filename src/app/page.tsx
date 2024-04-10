import Link from 'next/link';
import styles from './main.module.scss';
import { Inter } from 'next/font/google';
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <main className={clsx(styles.mainWrap, inter.className)}>
      <Link href="/home">Login</Link>
      <Link href="/home">Home</Link>
    </main>
  )
}
